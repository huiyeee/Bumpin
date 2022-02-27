import React from "react";
import { signInWithGoogle } from "../utilities/firebase";
import { Button, Typography } from "@mui/material";
import bumpinLogo from "../bumpinlogo.png";

const LogOnPanel = () => {
  return (
    <div>
      <Typography variant="h2">Welcome to Bumpin! Log in to start.</Typography>
      <img
        src={bumpinLogo}
        alt="Bumpin logo"
        className="center"
        style={{
          borderRadius: "50%",
          width: "15%",
          height: "15%",
          background: "white",
          border: "7px solid #393555",
          margin: "20px"
        }}
      />
      <p></p>
      <Button className="b-button mui" onClick={() => signInWithGoogle()}>
        Sign In
      </Button>
    </div>
  );
};

export default LogOnPanel;
