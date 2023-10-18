package com.codereview.AssignmentSubmissionApp.enums;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum AssignmentStatusEnum {
	PENDING_SUBMISSION("Pending Submission",1),
	SUBMITTED("Submitted",2),
	IN_REVIEW("In Review",3),
	NEEDS_UPDATE("Needs Update",4),
	COMPLETED("Completed",5),
	RESUBMITTED("Resubmitted",6);
	
	
	private String status;
	private Integer step;
	
	AssignmentStatusEnum(String string,Integer step) {
		this.status = string;
		this.step = step;
	}

	public String getStatus() {
		return status;
	}

	public Integer getStep() {
		return step;
	}

	

	
}
