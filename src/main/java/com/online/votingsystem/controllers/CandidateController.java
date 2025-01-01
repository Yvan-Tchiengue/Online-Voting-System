package com.online.votingsystem.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.online.votingsystem.entities.Candidate;
import com.online.votingsystem.services.CandidateService;

@RestController
@RequestMapping("/api/candidates")
public class CandidateController {
    @Autowired
    private CandidateService candidateService;

    @GetMapping
    public List<Candidate> getCandidates() {
        return candidateService.getAllCandidates();
    }

    @PostMapping("/vote/{id}")
    public ResponseEntity<?> vote(@PathVariable Long id) {
        candidateService.incrementVote(id);
        return ResponseEntity.ok("Vote recorded successfully!");
    }
}