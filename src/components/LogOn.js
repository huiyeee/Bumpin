import React from "react";
import { signInWithGoogle } from "../utilities/firebase";
import { Button } from "@mui/material";
import bumpinLogo from '../bumpinlogo.png';

const LogOnPanel = () => {
  return (
    <div>
      <p>Welcome to Bumpin! Log in to start.</p>
      <img src={bumpinLogo} alt="Bumpin logo" className="center" style={{
          borderRadius: "50%",
          width: 100,
          height: 100,
          background: "white",
        }}/>
        <p></p>
        <div className='b-button' onClick={() => signInWithGoogle()}>Sign In</div>
    </div>
  );
};

export default LogOnPanel;
