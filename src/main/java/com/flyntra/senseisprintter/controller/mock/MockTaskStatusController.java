package com.flyntra.senseisprintter.controller.mock;

import com.flyntra.senseisprintter.service.mock.MockTaskStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MockTaskStatusController {

    @Autowired
    MockTaskStatusService mockTaskStatusService;

    @GetMapping(value = "/mock/task-status", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getJiraData() {
        return ResponseEntity.ok(mockTaskStatusService.mockTaskData()); // No need to null check for mock data
    }
}
