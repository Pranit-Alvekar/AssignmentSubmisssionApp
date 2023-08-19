package com.codereview.AssignmentSubmissionApp;

import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder {
	
	@Test
	public void encode_password() {
		BCryptPasswordEncoder passwordEncoder= new BCryptPasswordEncoder();
		System.out.println(passwordEncoder.encode("asdfasdf"));
	}

}
