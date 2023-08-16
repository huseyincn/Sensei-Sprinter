package com.flyntra.senseisprintter.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class CozumMerkeziService {

    private static final String URL = "COZUM-MERKEZI-API";

    private String getDataFromCozumMerkezi() {
        WebClient webClient = WebClient.create();
        String url = URL; // olay yönetimden veri al
        Mono<String> response = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(String.class);
        return response.block();
    }
}
