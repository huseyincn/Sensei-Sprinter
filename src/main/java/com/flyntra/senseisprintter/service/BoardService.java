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
public class BoardService {

    @Autowired
    WebClientService webClientService;
    private final Logger logger = LoggerFactory.getLogger(BoardService.class);
    private static final String BOARDIDURL = "/jira/rest/agile/1.0/board";

    public String getBoardsFilteredWithName(String name) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            ArrayNode sprintNodes = mapper.createArrayNode();

            String json = webClientService.getData(BOARDIDURL + "?name=" + name);
            JsonNode rootNode = mapper.readTree(json);
            JsonNode values = rootNode.get("values");
            if (!values.isEmpty()) {
                for (JsonNode sprintNode : values) {
                    ObjectNode newValue = sprintNodes.addObject();
                    newValue.put("id", sprintNode.get("id").asText());
                    newValue.put("name", sprintNode.get("name").asText());
                }
            }
            return mapper.writeValueAsString(sprintNodes);
        } catch (Exception e) {
            logger.error(e.toString());
            return null;
        }
    }

}
