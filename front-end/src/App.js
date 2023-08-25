import { useEffect, useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import AssignmentView from "./AssignmentView";
import "bootstrap/dist/css/bootstrap.min.css";
import CodeReviewerDashboard from "./CodeReviewerDashboard";
import CodeReviewAssignmentView from "./CodeReviewAssignmentView/CodeReviewAssignmentView";
import {  useUser } from "./UserProvider";

function App() {
  // This will log "Hello" to the console when the component renders
  //const [jwt, setJwt] = useLocalState("", "jwt");
  const [roles, setRoles] = useState([]);
  const user = useUser();

  useEffect(()=>{
    setRoles(getRolesFromJWT());
  },[user.jwt]);

  function getRolesFromJWT() {
    if (user.jwt) {
      const decodedJWT = jwt_decode(user.jwt);
      return decodedJWT.authorities;
    }
    return [];
  }

  return (
    
      <Routes>
        <Route
          path="/dashboard"
          element={
            roles.find((role) => role === "ROLE_CODE_REVIEWER") ? (
              <PrivateRoute>
                <CodeReviewerDashboard />
              </PrivateRoute>
            ) : (
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            )
          }
        />
        <Route
          path="/assignments/:assignmentId"
          element={
            roles.find((role) => role === "ROLE_CODE_REVIEWER") ? (
              <PrivateRoute>
                <CodeReviewAssignmentView />
              </PrivateRoute>
            ) : (
              <PrivateRoute>
                <AssignmentView />
              </PrivateRoute>
            )
          }
        ></Route>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    
  );
}

export default App;
