
# Assignment Submission & Review App

Welcome to the Assignment Submission & Review App! This comprehensive app streamlines the process of submitting assignments, getting them reviewed, and facilitating communication between students and code reviewers. Below, you'll find an in-depth guide to the app's features, setup, and usage.

## Features

### Student Dashboard

Upon successful login, students are greeted with an intuitive dashboard that delivers essential information:

- **Upcoming Assignments:** Students can view a list of assignments along with their due dates.
- **Past Submissions:** Access a page to review past assignment submissions.
- **Review Status:** Instantly know the review status of assignments currently under evaluation.
- **Submit & Re-Submit:** Submit new assignments or re-submit modified ones with ease.

### Assignment Submission

Submitting assignments is effortless:

- **GitHub Repository:** Enter the GitHub URL of a public repository containing the assignment solution.
- **Branch Selection:** Choose the appropriate branch that showcases the correct solution.
- **Submission Status:** Assignments transition from "pending submission" to "submitted" upon successful submission.

### Code Review Process

Code review is a collaborative process, smoothly integrated into the app:

- **Reviewer Notifications:** Active code reviewers receive email notifications for new assignments.
- **Claiming Assignments:** Code reviewers can claim assignments they want to review.
- **Assignment Status:** The status of assignments changes from "submitted" to "in review" upon claiming.

### Feedback and Revisions

The feedback loop ensures high-quality assignments:

- **Assignment Rejection:** Reviewers can reject an assignment if it doesn't meet the criteria.
- **Updating Assignments:** Rejected assignments move to "needs update," and students are notified.
- **Resubmission:** Students can revise their work and resubmit, shifting the status back to "in review."

### Completion and Notifications

Successful completion is celebrated with notifications:

- **Review Completion:** Reviewers complete their reviews by providing video recording URLs.
- **Student Notifications:** Students are notified of the completed review along with feedback.
- **Final Status:** The assignment's status transitions from "in review" to "completed."

## Getting Started

1. Clone this repository to your local machine.
2. Set up the backend (Spring Boot) and frontend (React).
3. Configure environment variables for seamless operation.
4. Install the necessary dependencies using provided instructions.
5. Run the application and start optimizing assignment management.

## Usage

1. Students log in to their accounts and land on the dashboard.
2. Submit new assignments by providing GitHub URLs and branch names.
3. Active code reviewers receive email notifications for review.
4. Code reviewers claim assignments, initiate reviews, and provide feedback.
5. Students receive notifications about reviews, updates, and completions.

## Daily Batch Jobs

To ensure thoroughness, a daily batch job is implemented:

- **Rejected Assignments:** The system checks for rejected assignments that need improvements.
- **Student Notifications:** Students receive notifications prompting them to address rejected assignments.



This comprehensive guide outlines the Assignment Submission & Review App. It's designed to enhance assignment management, foster communication, and streamline the review process. For more information on implementation details and specific usage, consult the respective sections above. Your efficient assignment management journey starts here!
