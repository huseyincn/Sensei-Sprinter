package com.flyntra.senseisprintter.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
public class Backlog {

    @GetMapping
    public ResponseEntity<String> register() {
        WebClient webClient = WebClient.create(); // this will move in service class as business logic
        String url = "";
        Mono<String> response = webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(String.class);
        String json = response.block();
        return ResponseEntity.ok("asdasd");
    }
}
