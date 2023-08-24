package com.codereview.AssignmentSubmissionApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.codereview.AssignmentSubmissionApp.domain.Assignment;
import com.codereview.AssignmentSubmissionApp.domain.User;

import java.util.Set;

public interface AssignmentRepository extends JpaRepository<Assignment, Long>{
	
		Set<Assignment> findByUser(User user);

		@Query("select a from Assignment a where a.status = 'submitted' "
				+ "or a.codeReviewer = :codeReviewer")
		Set<Assignment> findByCodeReviewer(User codeReviewer);
}
