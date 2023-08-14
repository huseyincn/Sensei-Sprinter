package com.flyntra.senseisprintter.service;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class BacklogService {

    private final String URL = "http://localhost:8095/jira/rest/greenhopper/1.0/xboard/work/allData.json";

    public String getJsonDataFromJira(String rapidViewId) {
        WebClient webClient = WebClient.create(); // this will move in service class as business logic
        String url = URL + "?rapidViewId="+rapidViewId;
        Mono<String> response = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(String.class);
        return response.block();
    }


    public String parseTheData(String json) {
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        try {
            JsonNode rootNode = objectMapper.readTree(json);
            JsonNode columnsNode = rootNode.path("columnsData").path("columns");
            JsonNode issuesNode = rootNode.path("issuesData").path("issues");
            ObjectNode newNode = objectMapper.createObjectNode();
            newNode.set("issues", issuesNode);
            newNode.set("columns", columnsNode);
            return objectMapper.writeValueAsString(newNode);
        } catch (Exception e) {
            System.out.println(" " + e);
            return null;
        }
    }
}
