package com.codereview.AssignmentSubmissionApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codereview.AssignmentSubmissionApp.domain.Assignment;

public interface AssignmentRepository extends JpaRepository<Assignment, Long>{

}
