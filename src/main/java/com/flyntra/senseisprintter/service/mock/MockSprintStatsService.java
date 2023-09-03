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
import java.util.Date;
import java.util.Random;

@Service
public class MockSprintStatsService {
    @Autowired
    DateUtilService dateUtilService;
    private final Random r = new Random();
    private final Logger logger = LoggerFactory.getLogger(MockSprintStatsService.class);
    private SimpleDateFormat formatter = new SimpleDateFormat("EE MMM d y H:m:s ZZZ");

    public String mockSpringData(String team) {
        try {
            Date sDate = dateUtilService.getStartDate();
            Date eDate = dateUtilService.getEndDate();
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
            rtnData.put("startDate", formatter.format(sDate));
            rtnData.put("endDate", formatter.format(eDate));

            ArrayNode wDays = rtnData.putArray("workdays");
            LocalDate sDate1 = sDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
            LocalDate eDate1 = eDate.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

            while (!sDate1.isAfter(eDate1)) {
                if (sDate1.getDayOfWeek() != DayOfWeek.SATURDAY && sDate1.getDayOfWeek() != DayOfWeek.SUNDAY) {
                    wDays.add(sDate1.getDayOfMonth());
                }
                sDate1 = sDate1.plusDays(1);
            }

            return mapper.writeValueAsString(rtnData);
        } catch (Exception e) {
            logger.error("MOCK DATA COULDN'T INITIALIZED.");
            return null;
        }
    }
}
