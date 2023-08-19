package com.flyntra.senseisprintter.service.mock;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class MockTeamService {

    private final Logger logger = LoggerFactory.getLogger(MockTeamService.class);
    public String ekipDataDon(String ekipOpsiyon) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            ArrayNode rtnData = mapper.createArrayNode();

            List<TeamMate> ekip = ekibiGetir(ekipOpsiyon);
            Collections.shuffle(ekip);

            for (TeamMate calisan : ekip) {
                ObjectNode calisanNode = rtnData.addObject();
                calisanNode.put("sicil",calisan.getSicilNo());
                calisanNode.put("isim",calisan.getIsim());
                calisanNode.put("foto",calisan.getFoto());
                calisanNode.put("role",calisan.getRole());
            }
            return mapper.writeValueAsString(rtnData);
        } catch (Exception e) {
            logger.error("MOCK DATA COULDN'T INITIALIZED.");
            return null;
        }
    }


    protected List<TeamMate> ekibiGetir(String ekipOpsiyon) {
        switch (ekipOpsiyon) {
            case "brba":
                return albuquerqueTeam();
            case "top":
                return eastLondonTeam();
            default:
                return altinEkip();
        }
    }

    private List<TeamMate> altinEkip() {
        List<TeamMate> ekip = new ArrayList<>();
        ekip.add(new TeamMate("U000001","Gökhan ÇULFACI", "Mentor", "https://media.licdn.com/dms/image/C4D03AQHvqyFhRvL2mw/profile-displayphoto-shrink_200_200/0/1592905279360?e=1697673600&v=beta&t=q-aIx-_axltF6Ov5xVqoJuiH7tiX6uNnpxuALJ2MkKY"));
        ekip.add(new TeamMate("U000002","Akın YILMAZ", "Frontend Developer", "https://media.licdn.com/dms/image/D4D03AQF7RYK5htCk0g/profile-displayphoto-shrink_200_200/0/1685098195405?e=1697673600&v=beta&t=WzCcTuDYEwejIo17EKPaBmmZHzESqCX1eHbGKRN9k2g"));
        ekip.add(new TeamMate("U000003","Hüseyin ÇAN", "Backend Developer", "https://media.licdn.com/dms/image/D4D03AQEa-nvDhfqb3Q/profile-displayphoto-shrink_200_200/0/1692302702300?e=1697673600&v=beta&t=o83lRUF-tvs3falrH7U8_9DxwPsesWySFZP04HSZs_M"));
        ekip.add(new TeamMate("U000004","Onur ERDOĞAN", "Business Analyst", "https://media.licdn.com/dms/image/C4D03AQFnDS0p_d9m8A/profile-displayphoto-shrink_200_200/0/1584152541994?e=1697673600&v=beta&t=Y3y8Pf7FDhkv1BwlnylHGQK8EeBJGi3kvJJJ58y0lcA"));
        ekip.add(new TeamMate("U000005","Esin ERKOL", "Designer & Business Analyst", "https://media.licdn.com/dms/image/D4D03AQE2VNqBZMBM-Q/profile-displayphoto-shrink_200_200/0/1672781507189?e=1697673600&v=beta&t=H1GdKNaLXFbQjgMjZ_yjePfTDpKeu59_9TFvYjhOw9w"));
        ekip.add(new TeamMate("U000006","Beyza ER", "Business Analyst", "https://media.licdn.com/dms/image/D4D03AQEBX7TuNMC-Dw/profile-displayphoto-shrink_200_200/0/1691230065391?e=1697673600&v=beta&t=t_UonR5xx8TsorhJmFXAoXq4GPORZBBp-JqpRzb9d5c"));
        ekip.add(new TeamMate("U000007","Olcay ORAKCI", "Lead", "https://media.licdn.com/dms/image/C4D03AQGzMNMF6DYlmw/profile-displayphoto-shrink_200_200/0/1553458297994?e=1697673600&v=beta&t=gKyXQTora8JLd0JJDoO89U9eqZNgPIOOqMH1EApOYKg"));
        ekip.add(new TeamMate("U000008","Yavuz Berke BARIŞCAN", "Unknown", "https://media.licdn.com/dms/image/C5603AQGTK3F7wB3JcQ/profile-displayphoto-shrink_200_200/0/1663766209787?e=1697673600&v=beta&t=MqHnf5o5uasNrfvBJ3fJbdp_Gg3zC3Lb0kWz9zB5f50"));
        ekip.add(new TeamMate("U000009","Kaan ADALILAR", "Unknown", "https://media.licdn.com/dms/image/C5603AQGTK3F7wB3JcQ/profile-displayphoto-shrink_200_200/0/1663766209787?e=1697673600&v=beta&t=MqHnf5o5uasNrfvBJ3fJbdp_Gg3zC3Lb0kWz9zB5f50"));
        return ekip;
    }

    private List<TeamMate> eastLondonTeam() {
        List<TeamMate> ekip = new ArrayList<>();
        ekip.add(new TeamMate("U000001","Dushane HILL", "Investor", "https://static.wikia.nocookie.net/topboy/images/7/73/Dushane-2-1568982676.png/revision/latest/smart/width/386/height/259?cb=20221209063911"));
        ekip.add(new TeamMate("U000002","John SULLIVAN", "Co-founder", "https://static.wikia.nocookie.net/topboy/images/1/12/Top-boy-season-3-sully-3-1568982536.png/revision/latest?cb=20200910221008"));
        ekip.add(new TeamMate("U000003","Jamie TOVELL", "CEO", "https://static.wikia.nocookie.net/topboy/images/e/eb/JamieTovell.jpg/revision/latest?cb=20221023160729"));
        ekip.add(new TeamMate("U000004","Driss WRIGHT", "Co-founder", "https://static.wikia.nocookie.net/topboy/images/b/bb/Dris101.jpg/revision/latest?cb=20230526133244"));
        ekip.add(new TeamMate("U000005","Stefan TOVELL", "Family Member", "https://static.wikia.nocookie.net/topboy/images/9/97/Maxresdefault-0.jpg/revision/latest/scale-to-width-down/1000?cb=20200912004453"));
        ekip.add(new TeamMate("U000006","Ats AYITTET", "Student", "https://static.wikia.nocookie.net/topboy/images/e/e0/Top-boy-ats-2063734.jpg/revision/latest?cb=20200910212820"));
        ekip.add(new TeamMate("U000008","Ra'Nell SMITH", "Student", "https://static.wikia.nocookie.net/topboy/images/c/c5/7483b88d-805c-4562-9915-90234d9fd9f9.jpg/revision/latest?cb=20200623030801"));
        ekip.add(new TeamMate("U000009","Gem MUSTAPHA", "Student", "https://static.wikia.nocookie.net/topboy/images/3/37/AAAABatxyWrrG9BZueqB-my5HUOU4FDMdXDxTXQt26uAMYsaLsq_xKnGPEDcHyVQU57C1jiQY6JipXm2_MRzAfa1KOoI_VMkVrEnA1GpTfhHr6mkcE2c.jpg/revision/latest/scale-to-width-down/350?cb=20200623230547"));
        return ekip;
    }

    private List<TeamMate> albuquerqueTeam() {
        List<TeamMate> ekip = new ArrayList<>();
        ekip.add(new TeamMate("U000001","Jimmy McGILL", "Legal Consultant", "https://www.rappler.com/tachyon/2022/08/Screen-Shot-2022-08-16-at-3.54.21-PM.png"));
        ekip.add(new TeamMate("U000002","Gustavo FRING", "Restauran Owner", "https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/8/8c/Gustavo_Fring.jpg"));
        ekip.add(new TeamMate("U000003","Eduardo SALAMANCA", "Lalo", "https://static.wikia.nocookie.net/breakingbad/images/f/fd/BCS_S6_Portrait_Lalo.jpg/revision/latest?cb=20220522175118"));
        ekip.add(new TeamMate("U000004","Hector SALAMANCA", "Don Hector", "https://static.wikia.nocookie.net/breakingbad/images/3/30/Hector_FB.png/revision/latest?cb=20180825205553"));
        ekip.add(new TeamMate("U000005","Michael EHRMANTRAUT", "Security Consultant", "https://static.wikia.nocookie.net/breakingbad/images/4/46/BCS_S6_Portrait_Mike.jpg/revision/latest?cb=20220522174959"));
        ekip.add(new TeamMate("U000006","Kim WEXLER", "Legal Consultant", "https://static.wikia.nocookie.net/breakingbad/images/c/c6/BCS_S6_Portrait_Kim.jpg/revision/latest?cb=20220522174923"));
        ekip.add(new TeamMate("U000007","Nacho VARGA", "Transportation Consultant", "https://static.wikia.nocookie.net/breakingbad/images/8/84/Nacho_S6_infobox.jpg/revision/latest?cb=20220721155923"));
        ekip.add(new TeamMate("U000008","Walter WHITE", "Chemistry Consultant", "https://static.wikia.nocookie.net/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg/revision/latest?cb=20130928055404"));
        ekip.add(new TeamMate("U000009","Jessy PINKMAN", "Chemistry Consultant", "https://static.wikia.nocookie.net/breakingbad/images/c/ca/Jesse_Season_5B.jpg/revision/latest?cb=20220611094739"));
        return ekip;
    }

    class TeamMate {

        private String sicilNo;

        private String isim;

        private String foto;
        private String role;
        public String getSicilNo() {
            return sicilNo;
        }

        public String getIsim() {
            return isim;
        }

        public String getFoto() {
            return foto;
        }

        public String getRole() {
            return role;
        }

        public TeamMate(String sicilNo,String isim, String role, String foto) {
            this.sicilNo=sicilNo;
            this.isim = isim;
            this.role = role;
            this.foto = foto;
        }
    }
}
