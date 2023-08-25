package com.codereview.AssignmentSubmissionApp.web;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codereview.AssignmentSubmissionApp.domain.Comment;
import com.codereview.AssignmentSubmissionApp.domain.User;
import com.codereview.AssignmentSubmissionApp.dto.CommentDto;
import com.codereview.AssignmentSubmissionApp.service.CommentService;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

	@Autowired
	private CommentService commentService;

	@PostMapping("")
	public ResponseEntity<Comment> createComment(@RequestBody CommentDto commentDto,
			@AuthenticationPrincipal User user) {
		// System.out.println(commentDto);
		Comment comment = commentService.save(commentDto, user);
		return ResponseEntity.ok(comment);
	}
	
	@PutMapping("{commentId}")
	public ResponseEntity<Comment> updateComment(@RequestBody CommentDto commentDto,
			@AuthenticationPrincipal User user) {
		// System.out.println(commentDto);
		Comment comment = commentService.save(commentDto, user);
		return ResponseEntity.ok(comment);
	}

	@GetMapping("")
	public ResponseEntity<Set<Comment>> getCommentsByAssignment(@RequestParam Long assignmentId) {
		Set<Comment> comments = commentService.getCommentsByAssignmentId(assignmentId);
		return ResponseEntity.ok(comments);
	}
}
