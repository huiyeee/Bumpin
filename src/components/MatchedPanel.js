import React from "react";
import { Button } from "@mui/material";
import { Initial, Matched } from "../utilities/constant";
import { setData } from "../utilities/firebase";

const MatchedPanel = ({
  uid,
  shared_zoom_link
}) => {
  return (
    <div>
      <a
        className="App-link"
        target="_blank"
        href={shared_zoom_link}
        rel="noopener noreferrer"
      >
        You've bumped into someone! Click to join via Zoom
      </a>
      <br />
      <br />
      <Button
        variant="contained"
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
