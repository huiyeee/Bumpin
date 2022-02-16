import React from "react";
import { Router, Routes, Route, useParams } from "react-router-dom";
import { signInWithGoogle } from "../utilities/firebase";
import { Button, Typography } from "@mui/material";

const LogOn = () => {
  const { meetingId } = useParams();
  return (
    <Router>
      <p>test</p>
      <Routes>
        <Route
          path="/:meetingId"
          component={
            <div className="App">
              <header className="App-header">
                <Typography variant="h4">
                  Welcome to Bumpin! Ready to get started? Your meeting id is
                  {meetingId}.
                </Typography>
                <br />
                <Button variant="contained" onClick={() => signInWithGoogle()}>
                  Sign In
                </Button>
              </header>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default LogOn;
