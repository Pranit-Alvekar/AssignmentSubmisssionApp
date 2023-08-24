import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";
import ajax from "../Services/fetchService";
import {
  Badge,
  Button,
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import StatusBadge from "../StatusBadge";
import { useNavigate } from "react-router-dom";

const CodeReviewAssignmentView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [assignment, setAssignment] = useState({
    branch: "",
    githuburl: "",
    number: null,
    status: null,
  });
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [assignmentEnums, setAssignmentEnums] = useState([]);
  const [assignmentStatuses, setAssignmentStatuses] = useState([]);

  const prevAssignmentValue = useRef(assignment);

  function updateAssignment(prop, value) {
    const newAssignment = { ...assignment };
    newAssignment[prop] = value;
    setAssignment(newAssignment);
    //  console.log(assignment)
  }

  function save(status) {
    if (status && assignment.status !== status) {
      updateAssignment("status", status);
    } else {
      persist();
    }
  }

  function persist() {
    ajax(`/api/assignments/${id}`, "PUT", jwt, assignment).then(
      (assignmentData) => {
        setAssignment(assignmentData);
      }
    );
  }

  useEffect(() => {
    if (prevAssignmentValue.current.status !== assignment.status) {
      persist();
    }
    prevAssignmentValue.current = assignment;
  }, [assignment]);
  // function save() {
  //   const updatedStatus = assignmentStatuses[1].status;
  //   const updatedAssignment = assignment.status === assignmentStatuses[0].status
  //     ? { ...assignment, status: updatedStatus }
  //     : assignment;

  //   ajax(`/api/assignments/${id}`, "PUT", jwt, updatedAssignment).then(
  //     (assignmentData) => {
  //       setAssignment(assignmentData);
  //     }
  //   );
  // }

  useEffect(() => {
    ajax(`/api/assignments/${id}`, "GET", jwt).then((assignmentsResponse) => {
      let assignmentData = assignmentsResponse.assignment;
      if (assignmentData.branch === null) assignmentData.branch = "";
      if (assignmentData.githuburl === null) assignmentData.githuburl = "";
      setAssignment(assignmentData);
      setAssignmentEnums(assignmentsResponse.assignmentEnum);
      setAssignmentStatuses(assignmentsResponse.statusEnums);
    });
  }, []);

  // useEffect(() => console.log(assignmentEnums), [assignmentEnums]);

  return (
    <Container className="mt-5">
      <Row className="d-flex align-items-center">
        <Col>
          {assignment.number ? <h1>Assignment {assignment.number}</h1> : <></>}
        </Col>
        <Col>
          <StatusBadge text={assignment.status} />
        </Col>
      </Row>

      {assignment ? (
        <>
          <Form.Group as={Row} className="my-3" controlId="githuburl">
            <Form.Label column sm="3" md="2">
              Github URL:
            </Form.Label>
            <Col sm="9" md="8" lg="6">
              <Form.Control
                onChange={(e) => updateAssignment("githuburl", e.target.value)}
                type="url"
                readOnly
                placeholder="http://github.com/username/repo-name"
                value={assignment.githuburl}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="branch">
            <Form.Label column sm="3" md="2">
              Branch :
            </Form.Label>
            <Col sm="9" md="8" lg="6">
              <Form.Control
                onChange={(e) => updateAssignment("branch", e.target.value)}
                type="text"
                readOnly
                placeholder="example_branch_name"
                value={assignment.branch}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-3" controlId="githuburl">
            <Form.Label column sm="3" md="2">
              Video Review URL:
            </Form.Label>
            <Col sm="9" md="8" lg="6">
              <Form.Control
                onChange={(e) =>
                  updateAssignment("codeReviewVideoUrl", e.target.value)
                }
                type="url"
                placeholder="http://screencast-o-matic.com/something"
                value={assignment.codeReviewVideoUrl}
              />
            </Col>
          </Form.Group>

          <div className="d-flex gap-5">
            {assignment.status === "Completed" ? (
              <Button
                onClick={() => save(assignmentStatuses[2].status)}
                variant="secondary"
              >
                Re-Claim
              </Button>
            ) : (
              <Button onClick={() => save(assignmentStatuses[4].status)}>
                Complete Review
              </Button>
            )}

            {assignment.status === "Needs Update" ? (
              <Button
                variant="secondary"
                onClick={() => save(assignmentStatuses[2].status)}
              >
                Re-Claim
              </Button>
            ) : (
              <Button
                variant="danger"
                onClick={() => save(assignmentStatuses[3].status)}
              >
                Reject Assignment
              </Button>
            )}

            <Button variant="secondary" onClick={() => navigate("/dashboard")}>
              Back
            </Button>
          </div>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default CodeReviewAssignmentView;
