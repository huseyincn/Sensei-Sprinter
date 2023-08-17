package com.flyntra.senseisprintter.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SprintDateService {

    @Autowired
    WebClientService webClientService;
    private final Logger logger = LoggerFactory.getLogger(SprintDateService.class);
    private static final String BOARDIDURL = "/jira/rest/agile/1.0/board";

    public String getActiveSprintDetails(String boardId) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            String json = webClientService.getData(BOARDIDURL + boardId + "/sprint?state=active");
            JsonNode rootNode = mapper.readTree(json);

            ArrayNode sprints = mapper.createArrayNode();
            boolean isLast = rootNode.get("isLast").asBoolean();
            if (isLast) {
                JsonNode values = rootNode.get("values");
                if (!values.isEmpty()) {
                    for (JsonNode sprintNode : values) {
                        ObjectNode newValue = sprints.addObject();
                        newValue.put("id", sprintNode.get("id").asText());
                        newValue.put("name", sprintNode.get("name").asText());
                        newValue.put("startDate", sprintNode.get("startDate").asText());
                        newValue.put("endDate", sprintNode.get("endDate").asText());
                    }
                }
            }
            return mapper.writeValueAsString(sprints);
        } catch (Exception e) {
            logger.error(e.toString());
            return null;
        }
    }
}
