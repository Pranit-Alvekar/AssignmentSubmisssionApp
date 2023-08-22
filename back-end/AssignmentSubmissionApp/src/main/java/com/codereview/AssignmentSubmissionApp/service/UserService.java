package com.codereview.AssignmentSubmissionApp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codereview.AssignmentSubmissionApp.domain.User;
import com.codereview.AssignmentSubmissionApp.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
		public Optional<User> findUserByUsername(String username) {
			return userRepo.findByUsername(username);
		}
}
