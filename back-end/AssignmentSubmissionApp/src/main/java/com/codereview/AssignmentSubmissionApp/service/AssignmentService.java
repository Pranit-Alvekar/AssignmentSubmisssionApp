package com.codereview.AssignmentSubmissionApp.service;

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

}
