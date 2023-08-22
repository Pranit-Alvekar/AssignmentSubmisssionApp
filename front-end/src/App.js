import { useEffect } from "react";
import "./App.css";
import { useLocalState } from "./util/useLocalStorage";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Homepage from "./Homepage";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import AssignmentView from "./AssignmentView";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // This will log "Hello" to the console when the component renders
  const [jwt, setJwt] = useLocalState("", "jwt");

  return (
    <Routes>
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/assignments/:id"
        element={
          <PrivateRoute>
            <AssignmentView />
          </PrivateRoute>
        }
      ></Route>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
