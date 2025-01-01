package com.online.votingsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.online.votingsystem.entities.Candidate;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
}
