import React from "react";
import { Button } from "@mui/material";
import { Initial } from "../utilities/constant";
import { setData } from "../utilities/firebase";

const MatchedPanel = ({ uid, shared_zoom_link }) => {
  return (
    <div>
      <div>
        <p>You've bumped into someone!</p>
        <a href={shared_zoom_link}>Click to join via Zoom</a>
      </div>
      <Button
        onClick={() => {
          setData(`/users/${uid}/status`, Initial);
        }}
      >
        Leave the hallway
      </Button>
    </div>
  );
};

export default MatchedPanel;
