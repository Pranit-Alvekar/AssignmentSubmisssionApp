import React, { useEffect, useState } from "react";
import { useLocalState } from "../util/useLocalStorage";
import { useNavigate } from "react-router-dom";
import ajax from "../Services/fetchService";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import jwt_decode from "jwt-decode";

const CodeReviewerDashboard = () => {
  const navigate = useNavigate();
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [assignments, setAssignments] = useState(null);

  function claimAssignment(assignment) {
    const decodedJWT = jwt_decode(jwt);
    const user = {
     
      username: decodedJWT.sub,
      
    };

    assignment.codeReviewer = user;
    //  todo : dont hardcode this status
    assignment.status = "In Review";

    ajax(`/api/assignments/${assignment.id}`, "PUT", jwt, assignment).then(
      (updatedAssignment) => {
        const assignmentsCopy = [...assignments];
        const i = assignmentsCopy.findIndex((a)=> a.id === assignment.id);
        assignmentsCopy[i] = updatedAssignment;
        setAssignments(assignmentsCopy);
      }
    );
  }

  useEffect(() => {
    ajax("api/assignments", "GET", jwt).then((assignmentsData) => {
      setAssignments(assignmentsData);
    });
  }, [jwt]);

  function createAssignment() {
    ajax("api/assignments", "POST", jwt).then((assignment) => {
      navigate(`/assignments/${assignment.id}`);
      // window.location.href = `/assignments/${assignment.id}`;
    });
  }
  return (
    <Container>
      <Row>
        <Col>
          <div
            className="d-flex justify-content-end"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setJwt(null);
              window.location.href = "/login";
            }}
          >
            Logout
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Code Reviewer Dashboard</h1>
        </Col>
      </Row>

      <div className="assignment-wrapper submitted">
        <div
          className="h3 px-2"
          style={{
            width: "min-content",
            marginTop: "-2em",
            marginBottom: "1em",
            backgroundColor: "white",
            whiteSpace: "nowrap",
          }}
        >
          Awaiting Review
        </div>
        {assignments ? (
          <div
            className="d-grid gap-5"
            style={{ gridTemplateColumns: "repeat(auto-fill,18rem)" }}
          >
            {assignments.map((assignment) => (
              <Card
                key={assignment.id}
                style={{ width: "18rem", height: "18rem" }}
              >
                <Card.Body className="d-flex flex-column justify-content-around">
                  <Card.Title>Assignment #{assignment.number}</Card.Title>
                  <div className="d-flex alignitems-start">
                    <Badge pill bg="info" style={{ fontSize: "1em" }}>
                      {assignment.status}
                    </Badge>
                  </div>

                  <Card.Text style={{ marginTop: "1em" }}>
                    <b>Github URL:</b> {assignment.githuburl}
                    <br />
                    <b>Branch:</b> {assignment.branch}
                  </Card.Text>

                  <Button
                    variant="secondary"
                    onClick={() => {
                      claimAssignment(assignment);
                    }}
                  >
                    Claim
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};

export default CodeReviewerDashboard;
