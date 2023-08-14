package com.flyntra.senseisprintter.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TokenController {


    @PostMapping("/token/add")
    public ResponseEntity<String> addToken(@RequestParam(value = "token") String token) {
        return null;
    }

    @PostMapping("/token/update")
    public ResponseEntity<String> updateToken() {
        return null;
    }
}
