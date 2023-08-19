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
        try {
            List<String> status = new ArrayList<>(Arrays.asList("To Do", "In Progress", "Done"));
            List<String> mainTasks = new ArrayList<>(Arrays.asList(
                    "Sprint Activities",
                    "EFT Ekranı ve Dönüşümü",
                    "Postane Entegrasyonu",
                    "Bono Fiyatları Entegrasyonu",
                    "Borsa Ekranları Gerçekleştirimi",
                    "Tarihselleştirme ve Validasyon",
                    "BIST Entegrasyonu",
                    "Banka İçi Destek",
                    "Mikro Uygulamalar Düzeltme",
                    "Sonar Bulguları Geliştirme",
                    "Yatırım Hesapları Geliştirme"
            ));

            ObjectMapper mapper = new ObjectMapper();
            ArrayNode rtnData = mapper.createArrayNode();

            for (String mainTaskName : mainTasks) {
                // bu main taskı rasgele sayıda kişiye assign edicez
                ObjectNode mainTask = rtnData.addObject();
                mainTask.put("id", String.valueOf(r.nextInt(1000000, 9999999)));
                mainTask.put("key", String.format("STAJ-%4d", r.nextInt(1000, 9999)));
                mainTask.put("summary", mainTaskName);
                mainTask.set("assignee",null);
                mainTask.put("status", status.get(r.nextInt(status.size())));
                mainTask.set("labels", null);
                ArrayNode subTask = mainTask.putArray("subtasks");
                List<String> subTaskAyetler = getSubTaskListe();
                for (int i = 0; i < r.nextInt(3, 10); i++) {
                    ObjectNode task = subTask.addObject();
                    task.put("id", String.valueOf(r.nextInt(1000000, 9999999)));
                    task.put("key", String.format("STAJ-%4d", r.nextInt(1000, 9999)));
                    task.put("summary", mainTaskName+" - "+subTaskAyetler.remove(r.nextInt(subTaskAyetler.size())));
                    task.put("assignee",String.format("U%06d",r.nextInt(1,10)));
                    task.put("status", status.get(r.nextInt(status.size())));
                    int tahminiKacGunSurer = r.nextInt(2, 5);
                    int neZamanbaslar = r.nextInt(1, 21 - tahminiKacGunSurer);
                    task.put("labels", String.format("%d-%d", neZamanbaslar, neZamanbaslar + tahminiKacGunSurer));
                    int totalZaman = r.nextInt(2, 9);
                    int harcananZaman = r.nextInt(totalZaman + 1);
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
