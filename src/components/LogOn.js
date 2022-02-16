import React from "react";
import { useParams } from "react-router-dom";
import { signInWithGoogle } from "../utilities/firebase";
import { Button, Typography } from "@mui/material";

const LogOn = () => {
  const { meetingId } = useParams();
  return (
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
  );
};

export default LogOn;
