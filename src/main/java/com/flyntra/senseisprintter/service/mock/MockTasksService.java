package com.flyntra.senseisprintter.service.mock;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;

@Service
public class MockTasksService {
    @Autowired
    MockTeamService mockTeamService;
    @Autowired
    DateUtilService dateUtilService;
    private final Random r = new Random();
    private final Logger logger = LoggerFactory.getLogger(MockTasksService.class);

    private int taskDurum(String durum, int totalHour) {
        int ret = 0;
        if (durum.equals("gecmis")) {
            List<String> gecmisTask = Arrays.asList("DONE", "DONE", "DONE", "DONE", "DONE", "DONE", "DONE", "DONE", "DONE", "IN PROGRESS");
            Collections.shuffle(gecmisTask); // karıyoruz
            String rasgele = gecmisTask.get(r.nextInt(gecmisTask.size()));
            if (rasgele.equals("DONE"))
                ret = totalHour;
            else if (rasgele.equals("IN PROGRESS"))
                ret = r.nextInt(totalHour / 2, totalHour - 1);
        } else if (durum.equals("gelecek")) {
            List<String> gelecek = Arrays.asList("DONE", "ZERO", "ZERO", "ZERO", "ZERO", "ZERO", "ZERO", "ZERO", "ZERO", "IN PROGRESS");
            Collections.shuffle(gelecek); // karıyoruz
            String rasgele = gelecek.get(r.nextInt(gelecek.size()));
            if (rasgele.equals("DONE"))
                ret = totalHour;
            else if (rasgele.equals("IN PROGRESS"))
                ret = r.nextInt(totalHour / 2, totalHour);
            else
                ret = 0;
        } else if (durum.equals("suan")) {
            ret = r.nextInt(1, totalHour / 2);
        }
        return ret;
    }

    public String tasklariDagit() {
        int kisiSayi = mockTeamService.ekibiGetir("").size() + 1;
        try {
            List<String[]> mainTasks = getMainTasks();

            ObjectMapper mapper = new ObjectMapper();
            ArrayNode main = mapper.createArrayNode();
            Date sDate = dateUtilService.getStartDate();
            LocalDate curDay = new Date().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

            for (String[] mainTaskName : mainTasks) {
                // bu main taskı rasgele sayıda kişiye assign edicez
                ObjectNode mainTask = main.addObject();
                mainTask.put("id", String.valueOf(r.nextInt(1000000, 9999999)));
                mainTask.put("key", mainTaskName[1]);
                mainTask.put("summary", mainTaskName[0]);
                mainTask.set("assignee", null);
                mainTask.put("status", "In Progress");
                mainTask.set("labels", null);
                ArrayNode subTask = mainTask.putArray("subtasks");
                List<String> subTaskAyetler = getSubTaskListe();
                for (int i = 0; i < r.nextInt(5, subTaskAyetler.size()); i++) { // task başı sub task artırımına gidildi
                    int harcananZaman;
                    int tahminiKacGunSurer = r.nextInt(2, 6);
                    int neZamanbaslar = r.nextInt(1, 15 - tahminiKacGunSurer);
                    int endDate = neZamanbaslar + tahminiKacGunSurer;
                    int totalZaman = r.nextInt(4, 13);

                    LocalDate taskSDate = sDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
                    int tmp2 = neZamanbaslar;
                    while (tmp2 > 1) {
                        taskSDate = taskSDate.plusDays(1);
                        if (taskSDate.getDayOfWeek() != DayOfWeek.SATURDAY && taskSDate.getDayOfWeek() != DayOfWeek.SUNDAY) {
                            tmp2--;
                        }
                    }

                    LocalDate taskEDate = taskSDate;
                    int tmp = tahminiKacGunSurer;
                    while (tmp > 1) {
                        taskEDate = taskEDate.plusDays(1);
                        if (taskEDate.getDayOfWeek() != DayOfWeek.SATURDAY && taskEDate.getDayOfWeek() != DayOfWeek.SUNDAY) {
                            tmp--;
                        }
                    }

                    if (curDay.isAfter(taskEDate)) { //gecmis task
                        harcananZaman = taskDurum("gecmis", totalZaman);
                    } else if (curDay.isBefore(taskSDate)) { // gelecek task
                        harcananZaman = taskDurum("gelecek", totalZaman);
                    } else { // simdiki zaman
                        harcananZaman = taskDurum("suan", totalZaman);
                    }
                    ObjectNode task = subTask.addObject();
                    task.put("id", String.valueOf(r.nextInt(1000000, 9999999)));
                    task.put("key", String.format("STAJ-%4d", r.nextInt(1000, 9999)));
                    task.put("summary", mainTaskName[0] + " - " + subTaskAyetler.remove(r.nextInt(subTaskAyetler.size())));
                    task.put("assignee", String.format("U%06d", r.nextInt(1, kisiSayi)));
                    task.put("status", harcananZaman == totalZaman ? "Done" : harcananZaman == 0 ? "To Do" : "In Progress");
                    task.put("labels", String.format("%d-%d", neZamanbaslar, endDate));
                    task.put("startDate", neZamanbaslar);
                    task.put("endDate", endDate);
                    task.put("totalHour", totalZaman);
                    task.put("timeSpent", harcananZaman);
                }
            }
            return mapper.writeValueAsString(main);
        } catch (Exception e) {
            logger.error("MOCK DATA COULDN'T INITIALIZED.");
            return null;
        }
    }

    public String compactTasks() {
        int kisiSayi = mockTeamService.ekibiGetir("").size() + 1;
        try {
            ObjectMapper mapper = new ObjectMapper();
            ArrayNode main = mapper.createArrayNode();
            Date sDate = dateUtilService.getStartDate();
            LocalDate curDay = new Date().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

            List<String> subTaskSuffix = getSubTaskListe();
            for (int i = 1; i < kisiSayi; i++) { // tüm kişileri geziyorum sicil nolar 1 den 9 a kadar tasarladım
                ObjectNode kisiVeTasklari = main.addObject();
                kisiVeTasklari.put("sicilNo", String.format("U%06d", i));
                List<String[]> mainTaskName = getMainTasks();
                ArrayNode tasklar = kisiVeTasklari.putArray("subtasks");
                int neZamanBaslar = 1;
                int curTask = 1;
                int taskSayisi = r.nextInt(6, mainTaskName.size());
                while (neZamanBaslar < 16 && curTask < taskSayisi) { // her kişiye task dağıtıyorum
                    int mainTaskRnd = r.nextInt(mainTaskName.size());
                    int totalZaman = r.nextInt(4, 13);
                    int harcananZaman;
                    int tahminiKacGunSurer = r.nextInt(2, 6);
                    int endDate = neZamanBaslar + tahminiKacGunSurer < 16 ? neZamanBaslar + tahminiKacGunSurer : 15;

                    LocalDate taskSDate = sDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
                    int tmp2 = neZamanBaslar;
                    while (tmp2 > 1) {
                        taskSDate = taskSDate.plusDays(1);
                        if (taskSDate.getDayOfWeek() != DayOfWeek.SATURDAY && taskSDate.getDayOfWeek() != DayOfWeek.SUNDAY) {
                            tmp2--;
                        }
                    }

                    LocalDate taskEDate = taskSDate;
                    int tmp = tahminiKacGunSurer;
                    while (tmp > 1) {
                        taskEDate = taskEDate.plusDays(1);
                        if (taskEDate.getDayOfWeek() != DayOfWeek.SATURDAY && taskEDate.getDayOfWeek() != DayOfWeek.SUNDAY) {
                            tmp--;
                        }
                    }

                    if (curDay.isAfter(taskEDate)) { //gecmis task
                        harcananZaman = taskDurum("gecmis", totalZaman);
                    } else if (curDay.isBefore(taskSDate)) { // gelecek task
                        harcananZaman = taskDurum("gelecek", totalZaman);
                    } else { // simdiki zaman
                        harcananZaman = taskDurum("suan", totalZaman);
                    }
                    ObjectNode task = tasklar.addObject();
                    task.put("id", String.valueOf(r.nextInt(1000000, 9999999)));
                    task.put("key", String.format("STAJ-%4d", r.nextInt(1000, 9999)));
                    task.put("summary", mainTaskName.get(mainTaskRnd)[0] + " - " + subTaskSuffix.get(r.nextInt(subTaskSuffix.size()))); // genelde subtask atanan kişide benzerlik olur
                    task.put("assignee", String.format("U%06d", i)); // sicil buraya
                    task.put("status", harcananZaman == totalZaman ? "Done" : harcananZaman == 0 ? "To Do" : "In Progress");
                    task.put("labels", String.format("%d-%d", neZamanBaslar, endDate));
                    task.put("startDate", neZamanBaslar);
                    task.put("endDate", endDate);
                    task.put("totalHour", totalZaman);
                    task.put("timeSpent", harcananZaman);
                    task.put("parentTaskKey", mainTaskName.get(mainTaskRnd)[1]);
                    task.put("parentTaskDesc", mainTaskName.get(mainTaskRnd)[0]);
                    mainTaskName.remove(mainTaskRnd);
                    curTask++;
                    neZamanBaslar = endDate + 1;
                }
            }
            return mapper.writeValueAsString(main);
        } catch (Exception e) {
            logger.error("MOCK DATA COULDN'T INITIALIZED.");
            return null;
        }
    }

    private List<String[]> getMainTasks() {
        return new ArrayList<>(Arrays.asList(
                new String[]{"Sprint Activities", "STAJ-9862"},
                new String[]{"EFT Ekranı ve Dönüşümü", "STAJ-4682"},
                new String[]{"Postane Entegrasyonu", "STAJ-1439"},
                new String[]{"Bono Fiyatları Entegrasyonu", "STAJ-5436"},
                new String[]{"Borsa Ekranları Gerçekleştirimi", "STAJ-2876"},
                new String[]{"Tarihselleştirme ve Validasyon", "STAJ-8427"},
                new String[]{"BIST Entegrasyonu", "STAJ-3580"},
                new String[]{"Banka İçi Destek", "STAJ-6142"},
                new String[]{"Mikro Uygulamalar Düzeltme", "STAJ-7248"},
                new String[]{"Sonar Bulguları Geliştirme", "STAJ-1007"},
                new String[]{"Yatırım Hesapları Geliştirme", "STAJ-8842"},
                new String[]{"Borsa Mobil Uygulama Geliştirme", "STAJ-9534"},
                new String[]{"Vadeli Hesap Geliştirme", "STAJ-1674"},
                new String[]{"Fon Virman Kayıt Tutma", "STAJ-1724"},
                new String[]{"EFT İzleme Bildirme", "STAJ-8753"},
                new String[]{"MASAK Oto Bildirim Paneli", "STAJ-4568"},
                new String[]{"Sprint Planlama Aracı", "STAJ-6448"},
                new String[]{"Transferler Batch Projesi", "STAJ-2648"},
                new String[]{"Tablo Güncellemeleri", "STAJ-9452"},
                new String[]{"KKM Dönüşüm Planlama", "STAJ-1540"}
        ));
    }

    private List<String> getSubTaskListe() {
        return new ArrayList<>(Arrays.asList(
                "Analysis & Documenting",
                "Development",
                "Merge & Code Review",
                "Creating Test Scenarios",
                "Increasing Test Coverage",
                "UAT Monitoring",
                "Destek",
                "Optimization Code With Sonar",
                "Upgrade Java 8 to 17",
                "Configuration Optimization",
                "Deployment",
                "Maintenance"
        ));
    }

}
