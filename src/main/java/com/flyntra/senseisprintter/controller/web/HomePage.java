package com.flyntra.senseisprintter.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomePage {

    @GetMapping(value = "/")
    public String welcome() {
        return "index";
    }
}
