package com.flyntra.senseisprintter.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class BacklogService {

    @Autowired
    WebClientService webClientService;
    private final Logger logger = LoggerFactory.getLogger(BacklogService.class);

    // This Constant Strings json property keys for parsing
    public static final String SUBTASKS = "subtasks";
    public static final String SUMMARY = "summary";
    public static final String ASSIGNEE = "assignee";
    public static final String STATUS = "status";
    public static final String LABELS = "labels";
    private static final String ISSUESFROMSPRINT = "/jira/rest/agile/1.0/sprint/";

    public String getIssuesFromSprint(String sprintId) { // subtaskları bekleyip onları parenta bağlayıp çevirsin
        ObjectMapper mapper = new ObjectMapper();
        try {
            int startAt = 0;
            int total = 1;

            ArrayNode newIssuesNode = mapper.createArrayNode();
            ArrayNode calisanlarNode = mapper.createArrayNode();
            List<String> calisanlar = new ArrayList<>();


            List<String> subTasksId = new ArrayList<>();
            ObjectNode parent = null;
            ArrayNode subtasksNode = mapper.createArrayNode();
            while (startAt < total) {
                String json = webClientService.getData(ISSUESFROMSPRINT + sprintId + "/issue?startAt=" + startAt);
                JsonNode rootNode = mapper.readTree(json);

                startAt = rootNode.get("startAt").asInt();
                total = rootNode.get("total").asInt();
                int whatIGot = rootNode.get("maxResults").asInt();

                JsonNode issuesNode = rootNode.path("issues");
                for (JsonNode issue : issuesNode) {
                    ObjectNode newIssue = mapper.createObjectNode();
                    if (issue.has("id") || issue.has("key")) {
                        newIssue.put("id", issue.get("id").asText());
                        newIssue.put("key", issue.get("key").asText());
                    }
                    if (issue.has("fields")) {
                        JsonNode fields = issue.get("fields");

                        if (fields.has(SUMMARY)) {
                            newIssue.put(SUMMARY, fields.get(SUMMARY).asText());
                        }

                        if (fields.has(ASSIGNEE) && fields.get(ASSIGNEE).has("name") && fields.get(ASSIGNEE).has("displayName")) {
                            JsonNode assigne = fields.get(ASSIGNEE);
                            String calisanSicil = assigne.get("name").asText();
                            newIssue.put(ASSIGNEE, calisanSicil);
                            if (!calisanlar.contains(calisanSicil)) {
                                calisanlar.add(calisanSicil);
                                ObjectNode calisan = calisanlarNode.addObject();
                                calisan.put("Sicil", calisanSicil);
                                calisan.put("TamAd", assigne.get("displayName").asText());
                            }
                        } else {
                            newIssue.set(ASSIGNEE, null);
                        }

                        if (fields.has(STATUS) && fields.get(STATUS).has("name")) {
                            newIssue.put(STATUS, fields.get(STATUS).get("name").asText());
                        }

                        if (fields.has(LABELS)) {
                            newIssue.set(LABELS, fields.get(LABELS));
                        }

                        if (fields.has("parent") && parent != null) { // parent var mı subtaskı ekleme
                            subTasksId.remove(newIssue.get("id").asText());
                            subtasksNode.add(newIssue.deepCopy());
                            if (subTasksId.isEmpty()) {
                                parent.set(SUBTASKS, subtasksNode.deepCopy());
                                subtasksNode.removeAll();
                                newIssuesNode.add(parent.deepCopy());
                            }
                        } else if (fields.has(SUBTASKS) && !fields.get(SUBTASKS).isEmpty()) { // Parent task mı
                            for (JsonNode subtask : fields.get(SUBTASKS)) {
                                if (subtask.has("id")) {
                                    subTasksId.add(subtask.get("id").asText());
                                }
                            }
                            parent = newIssue;
                        } else { // sub tasks değil ve sub taskı yok
                            newIssue.set(SUBTASKS, mapper.createArrayNode());
                            newIssuesNode.add(newIssue);
                        }
                    }
                }
                startAt += whatIGot;
            }
            ObjectNode doncekNode = mapper.createObjectNode();
            doncekNode.set("Calisanlar", calisanlarNode);
            doncekNode.set("Tasklar", newIssuesNode);
            return mapper.writeValueAsString(doncekNode);
        } catch (Exception e) {
            logger.error(e.toString());
            return null;
        }
    }
}