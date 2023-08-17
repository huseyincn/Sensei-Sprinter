package com.flyntra.senseisprintter.controller;

import com.flyntra.senseisprintter.service.CozumMerkeziService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CozumMerkeziController {

    @Autowired
    CozumMerkeziService cozumMerkeziService;

    @GetMapping(value = "/getTickets", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> cozumMerkeziEndpoint() { // olcay Bey ile burası tartışılacak
        String data = cozumMerkeziService.getCozumMerkeziData();
        if (data != null)
            return ResponseEntity.ok(data);
        else
            return ResponseEntity.internalServerError().body("{\"error\":\"Jira is not accessible right now. I guess???\"}");
    }
}
