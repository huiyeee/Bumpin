import React from "react";
import { Button } from "@mui/material";

const Lobby = ({ toggleMatched }) => {
  return (
    <div>
      <p>
        Would you like to enter the hallway? we'll let you know if someone comes
        in
      </p>
      <Button variant="contained" onClick={toggleMatched}>
        Enter the hallway
      </Button>
    </div>
  );
};

export default Lobby;
