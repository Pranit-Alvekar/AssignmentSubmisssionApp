package com.codereview.AssignmentSubmissionApp.service;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codereview.AssignmentSubmissionApp.domain.Assignment;
import com.codereview.AssignmentSubmissionApp.domain.User;
import com.codereview.AssignmentSubmissionApp.repository.AssignmentRepository;

@Service
public class AssignmentService {

	@Autowired
	private AssignmentRepository assignmentRepo;
	
	public Assignment save(User user) {
		Assignment assignment = new Assignment();
		assignment.setStatus("Needs to be Submitted");
		assignment.setUser(user);
		
		return assignmentRepo.save(assignment);
	}
	
	public Set<Assignment> findByUser(User user){
		return assignmentRepo.findByUser(user);
	}

	public Optional<Assignment> findById(Long assignmentId) {
		return assignmentRepo.findById(assignmentId);
		
	}

	public Assignment save(Assignment assignment) {
		return assignmentRepo.save(assignment);
		
	}

}
