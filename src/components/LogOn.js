import React from "react";
import { signInWithGoogle } from "../utilities/firebase";
import { Button } from "@mui/material";

const LogOnPanel = () => {
  return (
    <div>
      <p>Welcome to Bumpin! Log in to start.</p>
      <Button onClick={() => signInWithGoogle()}>Sign In</Button>
    </div>
  );
};

export default LogOnPanel;
