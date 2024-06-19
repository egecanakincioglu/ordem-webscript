package com.ordem.controller;

import com.ordem.model.TeamMember;
import com.ordem.repository.TeamMemberRepository;
import com.ordem.services.VisitorCountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class APIController {

    @Autowired
    private TeamMemberRepository teamMemberRepository;

    @Autowired
    private VisitorCountService visitorCountService;

    @GetMapping("/visitor-count")
    public Long getVisitorCount() {
        return visitorCountService.getVisitorCount();
    }

    @GetMapping("/completed-projects")
    public List<String> getCompletedProjects() {
        return List.of("Project A", "Project B");
    }

    @GetMapping("/upcoming-projects")
    public List<String> getUpcomingProjects() {
        return List.of("Project C", "Project D");
    }

    @GetMapping("/team")
    public List<TeamMember> getTeam() {
        return teamMemberRepository.findAll();
    }

    @GetMapping("/contact-info")
    public String getContactInfo() {
        return "info@ordem.com";
    }
}
