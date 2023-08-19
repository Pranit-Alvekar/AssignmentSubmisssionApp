package com.codereview.AssignmentSubmissionApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codereview.AssignmentSubmissionApp.domain.Assignment;
import com.codereview.AssignmentSubmissionApp.domain.User;

import java.util.Set;

public interface AssignmentRepository extends JpaRepository<Assignment, Long>{
	
		Set<Assignment> findByUser(User user);
}
