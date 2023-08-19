package com.flyntra.senseisprintter.service.mock;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class MockTaskStatusService {

    private final Random r = new Random();
    private final Logger logger = LoggerFactory.getLogger(MockTaskStatusService.class);

    public String mockTaskData() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            int completedTask = r.nextInt(20, 50);
            int taskLeft = r.nextInt(20, 50);

            ObjectNode rtnData = mapper.createObjectNode();
            rtnData.put("completedTask", completedTask);
            rtnData.put("taskLeft", taskLeft);
            rtnData.put("percent",Math.round(100*((float) completedTask/(float) (completedTask+taskLeft))));

            return mapper.writeValueAsString(rtnData);
        } catch (Exception e) {
            logger.error("MOCK DATA COULDN'T INITIALIZED.");
            return null;
        }
    }
}
