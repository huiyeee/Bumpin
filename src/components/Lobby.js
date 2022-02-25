import React from "react";
import "../App.css";
import { Button, Typography } from "@mui/material";
import { setData } from "../utilities/firebase";
import { Matching } from "../utilities/constant";

const LobbyPanel = ({ uid }) => {
  return (
    <div>
      <Typography variant="h2" sx={{ color: "#ffebee" }}>
        Would you like to enter the hallway? <br /> We'll let you know if
        someone comes in
      </Typography>
      <Button
        className="b-button mui"
        onClick={() => {
          setData(`${process.env.NODE_ENV}/users/${uid}/status`, Matching);
        }}
      >
        Enter the hallway
      </Button>
    </div>
  );
};

export default LobbyPanel;
