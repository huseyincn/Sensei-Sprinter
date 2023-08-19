package com.flyntra.senseisprintter.controller.mock;

import com.flyntra.senseisprintter.service.mock.MockTimesheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class MockTimesheetController {

    @Autowired
    MockTimesheetService mockTimesheetService;

    @GetMapping(value = "/mock/time-log", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getJiraData(@RequestParam Optional<String> team) {
        if (team.isPresent())
            return ResponseEntity.ok(mockTimesheetService.mockEksikZamanGiris(team.get())); // No need to null check for mock data
        else
            return ResponseEntity.ok(mockTimesheetService.mockEksikZamanGiris(""));
    }
}
