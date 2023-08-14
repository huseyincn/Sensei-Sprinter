package com.flyntra.senseisprintter.controller;

import com.flyntra.senseisprintter.service.BacklogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BacklogController {

    @Autowired
    BacklogService backlogService;
    @GetMapping(value = "/getTable", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getJiraData(@RequestParam String tableId) {
        String data = backlogService.getJsonDataFromJira(tableId);
        return ResponseEntity.ok(backlogService.parseTheData(data));
    }
}
