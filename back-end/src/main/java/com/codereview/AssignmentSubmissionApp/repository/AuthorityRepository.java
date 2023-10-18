package com.codereview.AssignmentSubmissionApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codereview.AssignmentSubmissionApp.domain.Authority;

public interface AuthorityRepository  extends JpaRepository<Authority,Long>{

}
