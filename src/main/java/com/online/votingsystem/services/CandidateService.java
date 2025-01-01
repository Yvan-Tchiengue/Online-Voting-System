package com.online.votingsystem.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.online.votingsystem.entities.Candidate;
import com.online.votingsystem.repositories.CandidateRepository;

@Service
public class CandidateService {
    @Autowired
    private CandidateRepository candidateRepository;

    public List<Candidate> getAllCandidates() {
        return candidateRepository.findAll();
    }

    public void incrementVote(Long candidateId) {
        Candidate candidate = candidateRepository.findById(candidateId).orElseThrow();
        candidate.setVotes(candidate.getVotes() + 1);
        candidateRepository.save(candidate);
    }
}
