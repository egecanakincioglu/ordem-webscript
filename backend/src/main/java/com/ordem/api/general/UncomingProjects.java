package com.ordem.api.general;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/uncoming-projects")
public class UncomingProjects {
    @GetMapping
    public String getAllUsers() {
        return "Hello, World!";
    }
}
