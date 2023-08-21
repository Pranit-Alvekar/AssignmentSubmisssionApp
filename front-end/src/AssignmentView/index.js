import React, { useEffect, useState } from "react";
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

const AssignmentView = () => {
  const { id } = useParams();
  const [assignment, setAssignment] = useState({
    branch: "",
    githuburl: "",
    number: null,
    status: null
  });
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [assignmentEnums, setAssignmentEnums] = useState([]);
  const [assignmentStatuses, setAssignmentStatuses] = useState([]);


  async function updateAssignment(prop, value) {
    const newAssignment = { ...assignment };
    newAssignment[prop] = value;
    await setAssignment(newAssignment);
    //  console.log(assignment)
  }

  // function save() {
  //   console.log(`status ${assignment.status}`);
  //   if(assignment.status === assignmentStatuses[0].status){
  //     updateAssignment("status",assignmentStatuses[1].status)
  //     console.log(`status ${assignment.status}`);
  //   }
  //   ajax(`/api/assignments/${id}`, "PUT", jwt, assignment).then(
  //     (assignmentData) => {
  //       setAssignment(assignmentData);
  //     }
  //   );
  // }
  function save() {
    const updatedStatus = assignmentStatuses[1].status;
    const updatedAssignment = assignment.status === assignmentStatuses[0].status
      ? { ...assignment, status: updatedStatus }
      : assignment;
  
    ajax(`/api/assignments/${id}`, "PUT", jwt, updatedAssignment).then(
      (assignmentData) => {
        setAssignment(assignmentData);
      }
    );
  }
  
  


  useEffect(() => {
    ajax(`/api/assignments/${id}`, "GET", jwt).then((assignmentsResponse) => {
      let assignmentData = assignmentsResponse.assignment;
      if (assignmentData.branch === null) assignmentData.branch = "";
      if (assignmentData.githuburl === null) assignmentData.githuburl = "";
      setAssignment(assignmentData);
      setAssignmentEnums(assignmentsResponse.assignmentEnum);
      setAssignmentStatuses(assignmentsResponse.statusEnums);
      console.log(assignmentsResponse.statusEnums);
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
          <Badge pill bg="info" style={{ fontSize: "1em" }}>
            {assignment.status}
          </Badge>
        </Col>
      </Row>

      {assignment ? (
        <>
          <Form.Group as={Row} className="my-3" controlId="assignmentName">
            <Form.Label column sm="3" md="2">
              Assignment Number:
            </Form.Label>
            <Col sm="9" md="8" lg="6">
              <DropdownButton
                as={ButtonGroup}
                variant={"info"}
                title={
                  assignment.number
                    ? `Assignment ${assignment.number}`
                    : "Select an Assignment"
                }
                onSelect={(selectedElement) => {
                  updateAssignment("number", selectedElement);
                }}
              >
                {assignmentEnums.map((assignmentEnum) => (
                  <Dropdown.Item eventKey={assignmentEnum.assignmentNum}>
                    {assignmentEnum.assignmentNum}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="my-3" controlId="githuburl">
            <Form.Label column sm="3" md="2">
              Github URL:
            </Form.Label>
            <Col sm="9" md="8" lg="6">
              <Form.Control
                onChange={(e) => updateAssignment("githuburl", e.target.value)}
                type="url"
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
                placeholder="example_branch_name"
                value={assignment.branch}
              />
            </Col>
          </Form.Group>

          <Button onClick={() => save()}>Submit Assignment</Button>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default AssignmentView;
