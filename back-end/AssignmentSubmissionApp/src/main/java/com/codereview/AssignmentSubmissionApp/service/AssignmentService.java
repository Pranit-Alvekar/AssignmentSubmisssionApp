package com.codereview.AssignmentSubmissionApp.service;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import com.codereview.AssignmentSubmissionApp.domain.Assignment;
import com.codereview.AssignmentSubmissionApp.domain.User;
import com.codereview.AssignmentSubmissionApp.enums.AssignmentStatusEnum;
import com.codereview.AssignmentSubmissionApp.enums.AuthorityEnum;
import com.codereview.AssignmentSubmissionApp.repository.AssignmentRepository;

@Service
public class AssignmentService {

	@Autowired
	private AssignmentRepository assignmentRepo;

	public Assignment save(User user) {
		Assignment assignment = new Assignment();
		assignment.setStatus(AssignmentStatusEnum.PENDING_SUBMISSION.getStatus());
		assignment.setNumber(findNextAssignmentToSubmit(user));
		assignment.setUser(user);

		return assignmentRepo.save(assignment);
	}

	private Integer findNextAssignmentToSubmit(User user) {
		Set<Assignment> assignmentByUser = assignmentRepo.findByUser(user);
		if (assignmentByUser == null) {
			return 1;
		}
		Optional<Integer> nextAssignmentNumberOpt = assignmentByUser.stream().sorted((a1, a2) -> {
			if (a1.getNumber() == null)
				return -1;
			if (a2.getNumber() == null)
				return -1;
			return a2.getNumber().compareTo(a1.getNumber());
		})

				.map(assignment -> {
					if (assignment.getNumber() == null)
						return 1;
					return assignment.getNumber() + 1;
				}).findFirst();

		return nextAssignmentNumberOpt.orElse(1);
	}

	public Set<Assignment> findByUser(User user) {
		// loads assignment for reviewer
		boolean hasCodeReviewerRole = user.getAuthorities()
		.stream()
		.filter
		(auth -> AuthorityEnum.ROLE_CODE_REVIEWER.name().equals(auth.getAuthority()))
		.count() > 0;
		
		if(hasCodeReviewerRole) {
			return assignmentRepo.findByCodeReviewer(user);
		}else {
			// loads assignment for user
			return assignmentRepo.findByUser(user);
		}
		

		
	}

	public Optional<Assignment> findById(Long assignmentId) {
		return assignmentRepo.findById(assignmentId);

	}

	public Assignment save(Assignment assignment) {
		return assignmentRepo.save(assignment);

	}

}
