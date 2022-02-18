import React from "react";
import { signInWithGoogle } from "../utilities/firebase";
import { Button, Typography } from "@mui/material";

const LogOnPanel = () => {
  return (
    <div>
      <Typography variant="h4">Welcome to Bumpin! Log in to start.</Typography>
      <br />
      <Button variant="contained" onClick={() => signInWithGoogle()}>
        Sign In
      </Button>
    </div>
  );
};

export default LogOnPanel;
