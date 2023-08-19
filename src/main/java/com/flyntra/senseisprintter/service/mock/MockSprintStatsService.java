package com.flyntra.senseisprintter.service.mock;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;

@Service
public class MockSprintStatsService {

    private final Random r = new Random();
    private final Logger logger = LoggerFactory.getLogger(MockSprintStatsService.class);
    public String mockSpringData() {
        try {
            ObjectMapper mapper = new ObjectMapper();
            SimpleDateFormat formatter = new SimpleDateFormat("EE MMM d y H:m:s ZZZ");

            Calendar cal = Calendar.getInstance();
            int eksikGun=-1*r.nextInt(1,15);
            cal.add(Calendar.DATE, eksikGun);
            Date startDate =  cal.getTime();
            cal.add(Calendar.DATE, (21));
            Date endDate = cal.getTime();

            ObjectNode rtnData = mapper.createObjectNode();
            rtnData.put("id","1635");
            rtnData.put("boardName","FLYNTRA");
            rtnData.put("sprintName","1 - Sensei Sprinter");
            rtnData.put("startDate",formatter.format(startDate));
            rtnData.put("endDate",formatter.format(endDate));

            return mapper.writeValueAsString(rtnData);
        } catch (Exception e) {
            logger.error("MOCK DATA COULDN'T INITIALIZED.");
            return null;
        }
    }
}
