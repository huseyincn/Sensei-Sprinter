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
                calisanNode.put("sicil", calisan.getSicilNo());
                calisanNode.put("isim", calisan.getFname() + " " + calisan.getlName());
                calisanNode.put("foto", calisan.getFoto());
                calisanNode.put("role", calisan.getRole());
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
        ekip.add(new TeamMate("U000001", "Gökhan", "Çulfacı", "Mentor", "https://media.licdn.com/dms/image/C4D03AQHvqyFhRvL2mw/profile-displayphoto-shrink_200_200/0/1592905279360?e=1697673600&v=beta&t=q-aIx-_axltF6Ov5xVqoJuiH7tiX6uNnpxuALJ2MkKY"));
        ekip.add(new TeamMate("U000002", "Akın", "Yılmaz", "Frontend Developer", "https://media.licdn.com/dms/image/D4D03AQF7RYK5htCk0g/profile-displayphoto-shrink_200_200/0/1685098195405?e=1697673600&v=beta&t=WzCcTuDYEwejIo17EKPaBmmZHzESqCX1eHbGKRN9k2g"));
        ekip.add(new TeamMate("U000003", "Hüseyin", "ÇAN", "Backend Developer", "https://media.licdn.com/dms/image/D4D03AQEa-nvDhfqb3Q/profile-displayphoto-shrink_200_200/0/1692302702300?e=1697673600&v=beta&t=o83lRUF-tvs3falrH7U8_9DxwPsesWySFZP04HSZs_M"));
        ekip.add(new TeamMate("U000004", "Onur", "Erdoğan", "Business Analyst", "https://media.licdn.com/dms/image/C4D03AQFnDS0p_d9m8A/profile-displayphoto-shrink_200_200/0/1584152541994?e=1697673600&v=beta&t=Y3y8Pf7FDhkv1BwlnylHGQK8EeBJGi3kvJJJ58y0lcA"));
        ekip.add(new TeamMate("U000005", "Esin", "Erkol", "Designer & Business Analyst", "https://media.licdn.com/dms/image/D4D03AQE2VNqBZMBM-Q/profile-displayphoto-shrink_200_200/0/1672781507189?e=1697673600&v=beta&t=H1GdKNaLXFbQjgMjZ_yjePfTDpKeu59_9TFvYjhOw9w"));
        ekip.add(new TeamMate("U000006", "Beyza", "Er", "Business Analyst", "https://media.licdn.com/dms/image/D4D03AQEBX7TuNMC-Dw/profile-displayphoto-shrink_200_200/0/1691230065391?e=1697673600&v=beta&t=t_UonR5xx8TsorhJmFXAoXq4GPORZBBp-JqpRzb9d5c"));
        ekip.add(new TeamMate("U000007", "Olcay", "Orakcı", "Lead", "https://media.licdn.com/dms/image/C4D03AQGzMNMF6DYlmw/profile-displayphoto-shrink_200_200/0/1553458297994?e=1697673600&v=beta&t=gKyXQTora8JLd0JJDoO89U9eqZNgPIOOqMH1EApOYKg"));
        ekip.add(new TeamMate("U000008", "Yavuz Berke", "Barışcan", "Unknown", "https://media.licdn.com/dms/image/C4D03AQG-orZpwaaUXg/profile-displayphoto-shrink_200_200/0/1653912442727?e=1698883200&v=beta&t=V8008za_O9sIpFmEpobuktyni7wHT60TAObrME12rhU"));
        ekip.add(new TeamMate("U000009", "Kaan", "Adalılar", "Unknown", "https://media.licdn.com/dms/image/C5603AQGTK3F7wB3JcQ/profile-displayphoto-shrink_200_200/0/1663766209787?e=1697673600&v=beta&t=MqHnf5o5uasNrfvBJ3fJbdp_Gg3zC3Lb0kWz9zB5f50"));
        ekip.add(new TeamMate("U000010", "Kübra", "Aksu", "Unknown", "https://media.licdn.com/dms/image/D4D03AQENaDXNQxIskA/profile-displayphoto-shrink_200_200/0/1692531632474?e=1698278400&v=beta&t=6jDuRBNpX4fkQwSqEEj67pN3qgzs8GQ6oumLI-t4yzU"));
        ekip.add(new TeamMate("U000011", "Alp Tuna", "Dağdanaş", "Unknown", "https://media.licdn.com/dms/image/D5603AQF7HL_QUKhnvw/profile-displayphoto-shrink_200_200/0/1676363329262?e=1698278400&v=beta&t=cEWb3o4jkDzekfiF5oJGcm2mbgy9aCeeM20GC-89lzY"));
        ekip.add(new TeamMate("U000012", "Rod", "Jhonson", "Unknown", "https://pbs.twimg.com/profile_images/535226633003610112/rzTrIOcZ_400x400.jpeg"));
        ekip.add(new TeamMate("U000013", "Jordan", "Walke", "Unknown", "https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/b3tx4jhvxuuwocj295vs"));
        ekip.add(new TeamMate("U000014", "Navin", "Reddy", "Unknown", "https://media.licdn.com/dms/image/D5603AQEsuxJuw4mB3A/profile-displayphoto-shrink_200_200/0/1680175458890?e=1698278400&v=beta&t=Yerh0vfTxYcLNE3TncTY8k15l_3328j9ZzIoMLRpBfE"));
        ekip.add(new TeamMate("U000015", "Doğacan", "Kara", "Unknown", "https://media.licdn.com/dms/image/D4E03AQHTrE66aMYTrg/profile-displayphoto-shrink_200_200/0/1666645486033?e=1698278400&v=beta&t=pv9kq5aNx5Pl1p1wAtWLEYVuiW4YGOeP79SRTkbjMJ8"));
        ekip.add(new TeamMate("U000016", "Tuğberk", "Keçecioğlu", "Unknown", "https://media.licdn.com/dms/image/C5103AQHAH0sbkdg9TQ/profile-displayphoto-shrink_200_200/0/1517543184551?e=1698278400&v=beta&t=yCaB5DUcofP41GIT4-Afg6V0wmZE5Mf7snvC0UPpDvY"));
        return ekip;
    }

    private List<TeamMate> eastLondonTeam() {
        List<TeamMate> ekip = new ArrayList<>();
        ekip.add(new TeamMate("U000001", "Dushane", "Hill", "Investor", "https://static.wikia.nocookie.net/topboy/images/7/73/Dushane-2-1568982676.png"));
        ekip.add(new TeamMate("U000002", "John", "Sullivan", "Kano", "https://static.wikia.nocookie.net/topboy/images/1/12/Top-boy-season-3-sully-3-1568982536.png"));
        ekip.add(new TeamMate("U000003", "Jamie", "Tovell", "CEO", "https://static.wikia.nocookie.net/topboy/images/e/eb/JamieTovell.jpg"));
        ekip.add(new TeamMate("U000004", "Driss", "Wright", "Co-founder", "https://static.wikia.nocookie.net/topboy/images/b/bb/Dris101.jpg"));
        ekip.add(new TeamMate("U000005", "Stefan", "Tovell", "Family Member", "https://static.wikia.nocookie.net/topboy/images/9/97/Maxresdefault-0.jpg"));
        ekip.add(new TeamMate("U000006", "Ats", "Ayittet", "Student", "https://static.wikia.nocookie.net/topboy/images/e/e0/Top-boy-ats-2063734.jpg"));
        ekip.add(new TeamMate("U000007", "Ra'Nell", "Smith", "Student", "https://static.wikia.nocookie.net/topboy/images/c/c5/7483b88d-805c-4562-9915-90234d9fd9f9.jpg"));
        ekip.add(new TeamMate("U000008", "Gem", "Mustapha", "Student", "https://static.wikia.nocookie.net/topboy/images/3/37/AAAABatxyWrrG9BZueqB-my5HUOU4FDMdXDxTXQt26uAMYsaLsq_xKnGPEDcHyVQU57C1jiQY6JipXm2_MRzAfa1KOoI_VMkVrEnA1GpTfhHr6mkcE2c.jpg"));
        ekip.add(new TeamMate("U000009", "Michael", "Unknown", "Scout", "https://static.wikia.nocookie.net/topboy/images/8/8f/Michael_S2.png"));
        ekip.add(new TeamMate("U000010", "Jermaine", "Newton", "LFG Member", "https://static.wikia.nocookie.net/topboy/images/1/15/2020-08-25_%282%29.png"));
        ekip.add(new TeamMate("U000011", "Lawrence", "Jacqueline", "SH Member", "https://static.wikia.nocookie.net/topboy/images/9/9b/5196208.jpg-c_300_300_x-f_jpg-q_x-xxyxx.jpg"));
        ekip.add(new TeamMate("U000012", "Kieron", "Walker-Smith", "SH Member", "https://static.wikia.nocookie.net/topboy/images/0/00/Kieron.jpg"));
        ekip.add(new TeamMate("U000013", "Shaheed", "Norsad", "SH Member", "https://static.wikia.nocookie.net/topboy/images/a/ad/119478727_1968293383294379_4521228608321538462_n.jpg"));
        ekip.add(new TeamMate("U000014", "Tareek", "Unknown", "SH Member", "https://static.wikia.nocookie.net/topboy/images/d/d2/2500pppp.jpg"));
        ekip.add(new TeamMate("U000015", "Collins", "Unknown", "SH Member", "https://static.wikia.nocookie.net/topboy/images/3/38/119474047_775450329941236_6010094837014021705_n.jpg"));
        ekip.add(new TeamMate("U000016", "Naveah", "Unknown", "SH Member", "https://static.wikia.nocookie.net/topboy/images/c/c1/B2f55f12-30ce-43d6-b70b-e1c9d43c336f_625x352.jpg"));
        return ekip;
    }

    private List<TeamMate> albuquerqueTeam() {
        List<TeamMate> ekip = new ArrayList<>();
        ekip.add(new TeamMate("U000001", "Jimmy", "McGill", "Legal Consultant", "https://www.rappler.com/tachyon/2022/08/Screen-Shot-2022-08-16-at-3.54.21-PM.png"));
        ekip.add(new TeamMate("U000002", "Gustavo", "Fring", "Restauran Owner", "https://oyster.ignimgs.com/mediawiki/apis.ign.com/breaking-bad/8/8c/Gustavo_Fring.jpg"));
        ekip.add(new TeamMate("U000003", "Lalo", "Salamanca", "Lead", "https://static.wikia.nocookie.net/breakingbad/images/f/fd/BCS_S6_Portrait_Lalo.jpg"));
        ekip.add(new TeamMate("U000004", "Hector", "Salamanca", "Don Hector", "https://static.wikia.nocookie.net/breakingbad/images/3/30/Hector_FB.png"));
        ekip.add(new TeamMate("U000005", "Michael", "Ehrmantraut", "Security Consultant", "https://static.wikia.nocookie.net/breakingbad/images/4/46/BCS_S6_Portrait_Mike.jpg"));
        ekip.add(new TeamMate("U000006", "Kim", "Wexler", "Business Lawyer ", "https://static.wikia.nocookie.net/breakingbad/images/c/c6/BCS_S6_Portrait_Kim.jpg"));
        ekip.add(new TeamMate("U000007", "Nacho", "Varga", "Transportation Consultant", "https://static.wikia.nocookie.net/breakingbad/images/8/84/Nacho_S6_infobox.jpg"));
        ekip.add(new TeamMate("U000008", "Walter", "White", "Chemistry Consultant", "https://static.wikia.nocookie.net/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg"));
        ekip.add(new TeamMate("U000009", "Jessy", "Pinkman", "Chemistry Consultant", "https://static.wikia.nocookie.net/breakingbad/images/c/ca/Jesse_Season_5B.jpg"));
        ekip.add(new TeamMate("U000010", "Hank", "Schrader", "Officer", "https://static.wikia.nocookie.net/breakingbad/images/c/ca/Jesse_Season_5B.jpg"));
        ekip.add(new TeamMate("U000011", "Lydia", "Rodarte-Quayle", "Distributor", "https://static.wikia.nocookie.net/breakingbad/images/7/78/Lydia_S5b.jpg"));
        ekip.add(new TeamMate("U000012", "Todd", "Alquist", "Assistant", "https://static.wikia.nocookie.net/breakingbad/images/f/f5/Todd_S5b.jpg"));
        ekip.add(new TeamMate("U000013", "Skyler", "White", "Bookkeeper", "https://static.wikia.nocookie.net/breakingbad/images/3/33/Skyler_S5b.jpg"));
        ekip.add(new TeamMate("U000014", "Marie", "Schrader", "Technician", "https://static.wikia.nocookie.net/breakingbad/images/b/b7/Marie_S5b.jpg"));
        ekip.add(new TeamMate("U000015", "Howard", "Hamlin", "Corporate lawyer", "https://static.wikia.nocookie.net/breakingbad/images/5/53/BCS_S6_Portrait_Howard.jpg"));
        ekip.add(new TeamMate("U000016", "Chuck", "McGill", "Lawyer", "https://static.wikia.nocookie.net/breakingbad/images/3/3e/BCS_S3_ChuckMcGill.jpg"));
        return ekip;
    }

    class TeamMate {
        private String sicilNo;
        private String fname;
        private String lName;
        private String foto;
        private String role;

        public String getSicilNo() {
            return sicilNo;
        }

        public String getFname() {
            return fname;
        }

        public String getlName() {
            return lName;
        }

        public String getFoto() {
            return foto;
        }

        public String getRole() {
            return role;
        }

        public TeamMate(String sicilNo, String fName, String lName, String role, String foto) {
            this.sicilNo = sicilNo;
            this.fname = fName;
            this.lName = lName;
            this.role = role;
            this.foto = foto;
        }
    }
}
