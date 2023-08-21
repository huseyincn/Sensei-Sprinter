package com.flyntra.senseisprintter.controller.mock;

import com.flyntra.senseisprintter.service.mock.MockTasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MockTasksController {

    @Autowired
    MockTasksService mockTasksService;

    @GetMapping(value = "/mock/tasks", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getJiraData() {
        return ResponseEntity.ok(mockTasksService.tasklariDagit()); // No need to null check for mock data
    }

    @GetMapping(value = "/mock/tasks-compact", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getCompactData() {
        return ResponseEntity.ok(mockTasksService.compactTasks()); // No need to null check for mock data
    }
}
