package com.flyntra.senseisprintter.service.mock;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Service
public class MockTasksService {
    @Autowired
    MockTeamService mockTeamService;
    private final Random r = new Random();
    private final Logger logger = LoggerFactory.getLogger(MockTasksService.class);

    public String tasklariDagit() {
        int kisiSayi = mockTeamService.ekibiGetir("").size()+1;
        try {
            List<String[]> mainTasks = getMainTasks();

            ObjectMapper mapper = new ObjectMapper();
            ArrayNode rtnData = mapper.createArrayNode();

            for (String[] mainTaskName : mainTasks) {
                // bu main taskı rasgele sayıda kişiye assign edicez
                ObjectNode mainTask = rtnData.addObject();
                mainTask.put("id", String.valueOf(r.nextInt(1000000, 9999999)));
                mainTask.put("key", mainTaskName[1]);
                mainTask.put("summary", mainTaskName[0]);
                mainTask.set("assignee", null);
                mainTask.put("status", "In Progress");
                mainTask.set("labels", null);
                ArrayNode subTask = mainTask.putArray("subtasks");
                List<String> subTaskAyetler = getSubTaskListe();
                for (int i = 0; i < r.nextInt(3, 10); i++) {
                    int totalZaman = r.nextInt(4, 13);
                    int harcananZaman = r.nextInt(totalZaman + 1);
                    ObjectNode task = subTask.addObject();
                    task.put("id", String.valueOf(r.nextInt(1000000, 9999999)));
                    task.put("key", String.format("STAJ-%4d", r.nextInt(1000, 9999)));
                    task.put("summary", mainTaskName[0] + " - " + subTaskAyetler.remove(r.nextInt(subTaskAyetler.size())));
                    task.put("assignee", String.format("U%06d", r.nextInt(1, kisiSayi)));
                    task.put("status", harcananZaman == totalZaman ? "Done" : harcananZaman == 0 ? "To Do" : "In Progress");
                    int tahminiKacGunSurer = r.nextInt(2, 6);
                    int neZamanbaslar = r.nextInt(1, 21 - tahminiKacGunSurer);
                    task.put("labels", String.format("%d-%d", neZamanbaslar, neZamanbaslar + tahminiKacGunSurer));
                    task.put("startDate",neZamanbaslar);
                    task.put("endDate",neZamanbaslar+tahminiKacGunSurer);
                    task.put("totalHour", totalZaman);
                    task.put("timeSpent", harcananZaman);
                }
            }
            return mapper.writeValueAsString(rtnData);
        } catch (Exception e) {
            logger.error("MOCK DATA COULDN'T INITIALIZED.");
            return null;
        }
    }

    public String compactTasks() { // TODO üst üste binmeme check
        int kisiSayi = mockTeamService.ekibiGetir("").size()+1;
        try {
            ObjectMapper mapper = new ObjectMapper();
            ArrayNode rtnData = mapper.createArrayNode();
            List<String> subTaskSuffix = getSubTaskListe();
            for (int i = 1; i < kisiSayi; i++) { // tüm kişileri geziyorum sicil nolar 1 den 9 a kadar tasarladım
                ObjectNode kisiVeTasklari = mapper.createObjectNode();
                kisiVeTasklari.put("sicilNo",String.format("U%06d", i));
                List<String[]> mainTaskName = getMainTasks();
                ArrayNode tasklar = kisiVeTasklari.putArray("subtasks");
                for (int j = 0; j < r.nextInt(6, 12); j++) { // her kişiye task dağıtıyorum
                    int mainTaskRnd = r.nextInt(mainTaskName.size());
                    int totalZaman = r.nextInt(4, 13);
                    int harcananZaman = r.nextInt(totalZaman + 1);
                    ObjectNode task = tasklar.addObject();
                    task.put("id", String.valueOf(r.nextInt(1000000, 9999999)));
                    task.put("key", String.format("STAJ-%4d", r.nextInt(1000, 9999)));
                    task.put("summary", mainTaskName.get(mainTaskRnd)[0] + " - " + subTaskSuffix.get(r.nextInt(subTaskSuffix.size()))); // genelde subtask atanan kişide benzerlik olur
                    task.put("assignee", String.format("U%06d", i)); // sicil buraya
                    task.put("status", harcananZaman == totalZaman ? "Done" : harcananZaman == 0 ? "To Do" : "In Progress");
                    int tahminiKacGunSurer = r.nextInt(2, 6);
                    int neZamanbaslar = r.nextInt(1, 15 - tahminiKacGunSurer);
                    task.put("labels", String.format("%d-%d", neZamanbaslar, neZamanbaslar + tahminiKacGunSurer));
                    task.put("startDate",neZamanbaslar);
                    task.put("endDate",neZamanbaslar+tahminiKacGunSurer);
                    task.put("totalHour", totalZaman);
                    task.put("timeSpent", harcananZaman);
                    task.put("parentTaskKey", mainTaskName.get(mainTaskRnd)[1]);
                    task.put("parentTaskDesc", mainTaskName.get(mainTaskRnd)[0]);
                    mainTaskName.remove(mainTaskRnd);
                }
                rtnData.add(kisiVeTasklari);
            }
            return mapper.writeValueAsString(rtnData);
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
                new String[]{"Yatırım Hesapları Geliştirme", "STAJ-8842"}
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
                "Configuration Optimization"
        ));
    }

}
