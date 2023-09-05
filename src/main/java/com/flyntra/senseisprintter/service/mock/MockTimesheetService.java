package com.flyntra.senseisprintter.service.mock;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class MockTimesheetService {

    @Autowired
    MockTeamService mockTeamService;

    private final Random r = new Random();
    private final Logger logger = LoggerFactory.getLogger(MockTimesheetService.class);

    public String mockEksikZamanGiris(String ekipOpsiyon) {
        List<MockTeamService.TeamMate> ekip = mockTeamService.ekibiGetir(ekipOpsiyon);
        try {
            ObjectMapper mapper = new ObjectMapper();
            int kacKisi = r.nextInt(ekip.size());
            ObjectNode response = mapper.createObjectNode();
            response.put("ToplamKisi", kacKisi);
            ArrayNode rtnData = response.putArray("kisiler");

            for (int i = 0; i < kacKisi; i++) { // en az 7 kişi gelsin dendi
                int rndIndex = r.nextInt(ekip.size());
                ObjectNode calisan = rtnData.addObject();
                calisan.put("name", ekip.get(rndIndex).getFname());
                calisan.put("foto", ekip.get(rndIndex).getFoto());
                calisan.put("hours", r.nextInt(1,15));
                ekip.remove(rndIndex);
            }

            return mapper.writeValueAsString(response);
        } catch (Exception e) {
            logger.error("MOCK DATA COULDN'T INITIALIZED.");
            return null;
        }
    }
}
