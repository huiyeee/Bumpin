import React from "react";
import { signInWithGoogle } from "../utilities/firebase";
import { Button, Typography } from "@mui/material";

const LogOn = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4">
          Welcome to Bumpin! Ready to get started?
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
