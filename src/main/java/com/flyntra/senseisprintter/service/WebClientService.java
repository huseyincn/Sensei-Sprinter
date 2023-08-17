package com.flyntra.senseisprintter.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class WebClientService {

    private static final String BASEURL = "http://localhost:8095"; // replace with https://sdlc.yaXXXXXXi.com.tr

    @Autowired
    private WebClient webClient;

    protected String getData(String extansion) { // should consider to make bean or service this, I think this code will replace in other service
        String url = BASEURL + extansion;
        Mono<String> response = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(String.class); // .headers(h -> h.setBearerAuth(token))
        return response.block();
    }

}
