package com.online.votingsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.online.votingsystem.entities.Vote;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
}
