package com.codereview.AssignmentSubmissionApp.dto;

import com.codereview.AssignmentSubmissionApp.domain.Assignment;
import com.codereview.AssignmentSubmissionApp.enums.AssignmentEnum;

public class AssignmentResponseDto {
		
			private Assignment assignment;
			private AssignmentEnum[] assignmentEnum = AssignmentEnum.values();
			
			public Assignment getAssignment() {
				return assignment;
			}
			
			public void setAssignment(Assignment assignment) {
				this.assignment = assignment;
			}
			
			public AssignmentEnum[] getAssignmentEnum() {
				return assignmentEnum;
			}

			public AssignmentResponseDto(Assignment assignment) {
				super();
				this.assignment = assignment;
			}
			
			

}
