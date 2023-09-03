package com.flyntra.senseisprintter.service.mock;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.Random;

@Service
public class DateUtilService {

    private Date startDate;
    private Date endDate;
    private final Random r = new Random();

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    @PostConstruct
    public void init() {
        Calendar cal = Calendar.getInstance();
        int eksikGun = -1 * r.nextInt(4, 15);
        cal.add(Calendar.DATE, eksikGun);
        while (cal.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY || cal.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY) { // haftasonu gelmeme kontrolü
            cal.add(Calendar.DATE, -1);
        }
        startDate = cal.getTime();
        cal.add(Calendar.DATE, (20));
        while (cal.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY || cal.get(Calendar.DAY_OF_WEEK) == Calendar.SUNDAY) { // haftasonu gelmeme kontrolü
            cal.add(Calendar.DATE, -1);
        }
        endDate = cal.getTime();
    }
}
