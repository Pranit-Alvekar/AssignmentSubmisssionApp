import React, { useEffect, useState } from "react";
import { useLocalState } from "../util/useLocalStorage";
import {  useNavigate } from "react-router-dom";
import ajax from "../Services/fetchService";
import { Button, Card } from "react-bootstrap";

const Dashboard = () => {
  const navigate = useNavigate();
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [assignments, setAssignments] = useState(null);

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
    <div style={{ margin: "2em" }}>
      <div className="mb-4">

       <Button size="lg" onClick={() => createAssignment()}>Submit New Assignment</Button>
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
                <Card.Title>Assignment #{assignment.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {assignment.status}
                </Card.Subtitle>
                <Card.Text style={{ marginTop: "1em" }}>
                  <b>Github URL:</b> {assignment.githuburl}
                  <br />
                  <b>Branch:</b> {assignment.branch}
                </Card.Text>

                <Button
                  variant="secondary"
                  onClick={() => {
                    window.location.href = `/assignments/${assignment.id}`;
                  }}
                >
                  Edit
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      ) : (
        <></>
      )}

     
    </div>
  );
};

export default Dashboard;