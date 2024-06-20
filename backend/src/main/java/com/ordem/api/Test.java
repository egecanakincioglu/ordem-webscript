package com.ordem.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class Test {
    @GetMapping
    public String getAllUsers() {
        return "Hello, World!";
    }
}
