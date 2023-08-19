package com.flyntra.senseisprintter.controller;

import com.flyntra.senseisprintter.service.SprintDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SprintDateController {

    @Autowired
    SprintDateService sprintDateService;

    @GetMapping(value = "/sprint", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getSpringDatas(@RequestParam String boardId) {
        String data = sprintDateService.getActiveSprintDetails(boardId);
        if(data != null)
            return ResponseEntity.ok(data);
        else
            return ResponseEntity.internalServerError().body("{\"error\":\"Jira is not accessible right now. I guess???\"}");
    }
}
