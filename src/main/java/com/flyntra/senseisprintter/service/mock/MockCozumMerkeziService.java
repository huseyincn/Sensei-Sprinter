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
public class MockCozumMerkeziService {

    @Autowired
    MockTeamService mockTeamService;

    private final Random r = new Random();
    private final Logger logger = LoggerFactory.getLogger(MockCozumMerkeziService.class);

    public String mockCozumMerkeziData(String ekipOpsiyon) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            ObjectNode rtnData = mapper.createObjectNode();
            List<MockTeamService.TeamMate> ekip = mockTeamService.ekibiGetir(ekipOpsiyon);

            int bekleyenCagri = r.nextInt(5,20);
            int acikCagri = r.nextInt(10,40);

            rtnData.put("bekleyenCagri",bekleyenCagri);
            rtnData.put("acikCagri",acikCagri);
            ArrayNode cagriListe = rtnData.putArray("cagrilar");
            while (bekleyenCagri>0 && ekip.size()!=1) { // tek kişiye kadar çağrıları rasgele dağıt
                int rasgeleKisi = r.nextInt(ekip.size());
                int rasgeleCagriSayi = r.nextInt(1,bekleyenCagri+1);

                ObjectNode cagrici = cagriListe.addObject();
                cagrici.put("isim",ekip.get(rasgeleKisi).getIsim());
                cagrici.put("foto",ekip.get(rasgeleKisi).getFoto());
                cagrici.put("cagriSayisi",rasgeleCagriSayi);
                ekip.remove(rasgeleKisi);

                bekleyenCagri-=rasgeleCagriSayi;
            } // eğer son kişi kalırsa bütün çağrıları ona yükle
            ObjectNode cagrici = cagriListe.addObject();
            cagrici.put("isim",ekip.get(0).getIsim());
            cagrici.put("foto",ekip.get(0).getFoto());
            cagrici.put("cagriSayisi",bekleyenCagri);
            ekip.remove(0);

            return mapper.writeValueAsString(rtnData);
        } catch (Exception e) {
            logger.error("MOCK DATA COULDN'T INITIALIZED.");
            return null;
        }
    }
}
