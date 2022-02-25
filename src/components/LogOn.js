import React from "react";
import { signInWithGoogle } from "../utilities/firebase";
import { Button, Typography } from "@mui/material";
import bumpinLogo from "../bumpinlogo.png";

const LogOnPanel = () => {
  return (
    <div>
      <Typography variant="h2">BUMP'N</Typography>
      <img src={bumpinLogo} alt="Bumpin logo" className="center logo" />
      <p></p>
      <Button className="b-button mui" onClick={() => signInWithGoogle()}>
        Sign In
      </Button>
    </div>
  );
};

export default LogOnPanel;
