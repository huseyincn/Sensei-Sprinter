package com.flyntra.senseisprintter.service.mock;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class MockSprintStatsService {

    private final Random r = new Random();
    private final Logger logger = LoggerFactory.getLogger(MockSprintStatsService.class);

    public String mockSpringData(String team) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            ObjectNode rtnData = mapper.createObjectNode();
            rtnData.put("id", "1635");
            switch (team) {
                case "brba":
                    rtnData.put("boardName", "Mexico");
                    rtnData.put("sprintName", "1 - Better Call 444 0 444");
                    break;
                case "top":
                    rtnData.put("boardName", "Top Bank");
                    rtnData.put("sprintName", "5 - Summerhouse");
                    break;
                default:
                    rtnData.put("boardName", "FLYNTRA");
                    rtnData.put("sprintName", "1 - Sensei Sprinter");
            }

            return mapper.writeValueAsString(rtnData);
        } catch (Exception e) {
            logger.error("MOCK DATA COULDN'T INITIALIZED.");
            return null;
        }
    }
}
