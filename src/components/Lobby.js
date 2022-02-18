import React from "react";
import { Button } from "@mui/material";
import { setData } from "../utilities/firebase";
import { Matching } from "../utilities/constant";

const LobbyPanel = ({ uid }) => {
  return (
    <div>
      <p>
        Would you like to enter the hallway? We'll let you know if someone comes
        in
      </p>
      <Button
        onClick={() => {
          setData(`/users/${uid}/status`, Matching);
        }}
      >
        Enter the hallway
      </Button>
    </div>
  );
};

export default LobbyPanel;
