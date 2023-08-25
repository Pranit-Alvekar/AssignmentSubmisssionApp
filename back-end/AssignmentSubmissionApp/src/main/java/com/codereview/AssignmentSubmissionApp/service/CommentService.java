package com.codereview.AssignmentSubmissionApp.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codereview.AssignmentSubmissionApp.domain.Assignment;
import com.codereview.AssignmentSubmissionApp.domain.Comment;
import com.codereview.AssignmentSubmissionApp.domain.User;
import com.codereview.AssignmentSubmissionApp.dto.CommentDto;
import com.codereview.AssignmentSubmissionApp.repository.AssignmentRepository;
import com.codereview.AssignmentSubmissionApp.repository.CommentRepository;

@Service
public class CommentService {

	@Autowired
	private CommentRepository commentRepo;

	@Autowired
	private AssignmentRepository assignmentRepo;

	public Comment save(CommentDto commentDto, User user) {
		Comment comment = new Comment();

		Assignment assignment = assignmentRepo.getById(commentDto.getAssignmentId());
		comment.setId(commentDto.getId());
		comment.setText(commentDto.getText());
		comment.setCreatedBy(user);
		comment.setAssignment(assignment);
		if(comment.getId() == null)
		comment.setCreatedDate(LocalDateTime.now());
		
		return commentRepo.save(comment);

	}

	public Set<Comment> getCommentsByAssignmentId(Long assignmentId) {
		Set<Comment> comments = commentRepo.findByAssignmentId(assignmentId);
		return comments;
	}

}
