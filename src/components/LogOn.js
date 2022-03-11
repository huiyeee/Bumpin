import React from "react";
import { signInWithGoogle } from "../utilities/firebase";
import { Button, Typography } from "@mui/material";
import bumpinLogo from "../bumpinlogo.png";

const LogOnPanel = () => {
  return (
    <div style={{
      width: "100%",
    }}>
      <p className="login-warning">Please login to start first.</p>
      <p></p>
      <Button className="b-button mui" onClick={() => signInWithGoogle()}>
        Sign In
      </Button>
    </div>
  );
};

export default LogOnPanel;
