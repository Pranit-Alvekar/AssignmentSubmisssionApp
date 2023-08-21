package com.codereview.AssignmentSubmissionApp.web;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codereview.AssignmentSubmissionApp.domain.Assignment;
import com.codereview.AssignmentSubmissionApp.domain.User;
import com.codereview.AssignmentSubmissionApp.dto.AssignmentResponseDto;
import com.codereview.AssignmentSubmissionApp.service.AssignmentService;

@RestController
@RequestMapping("/api/assignments")
public class AssignmentController {
	
	@Autowired
	private AssignmentService assignmentService;
	
	@PostMapping("")
	public ResponseEntity<?> createAssignment(@AuthenticationPrincipal User user){
		Assignment newAssignment = assignmentService.save(user);
		
		return ResponseEntity.ok(newAssignment);
	}
	
	  @GetMapping("")
	    public ResponseEntity<?> getAssignments(@AuthenticationPrincipal User user) {
	        Set<Assignment> assignmentsByUser = assignmentService.findByUser(user);
	        return ResponseEntity.ok(assignmentsByUser);
	    }
	
	@GetMapping("{assignmentId}")
	public ResponseEntity<?> getAssignments(@PathVariable Long assignmentId ,@AuthenticationPrincipal User user){
		
		Optional<Assignment> assignmentOpt = assignmentService.findById(assignmentId);
		
		
		return ResponseEntity.ok(new AssignmentResponseDto(assignmentOpt.orElse(new Assignment())));
		
	}
	
	@PutMapping("{assignmentId}")
	public ResponseEntity<?> getAssignments(@PathVariable Long assignmentId ,@RequestBody Assignment assignment,@AuthenticationPrincipal User user){
		
		Assignment updatedAssignment = assignmentService.save(assignment);
		return ResponseEntity.ok(updatedAssignment);
	}
	

}
