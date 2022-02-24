import React from "react";
import "../App.css";
import { Button } from "@mui/material";
import { setData } from "../utilities/firebase";
import { Matching } from "../utilities/constant";

const LobbyPanel = ({ uid }) => {
  return (
    <div>
      <h2 style={{color: '#ffebee'}}>
        Would you like to enter the hallway? <br/> We'll let you know if someone comes in
      </h2>
      <div
        className='b-button'
        onClick={() => {
          setData(`${process.env.NODE_ENV}/users/${uid}/status`, Matching);
        }}
      >
        Enter the hallway
        </div>
    </div>
  );
};

export default LobbyPanel;
