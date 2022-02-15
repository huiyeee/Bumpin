import React from "react";
import { Button } from "@mui/material";

const Matched = ({ toggleMatched }) => {
  return (
    <div>
      <a
        className="App-link"
        href="https://northwestern.zoom.us/my/yvanchu"
        target="_blank"
        rel="noopener noreferrer"
      >
        You've bumped into someone! Click to join via Zoom
      </a>
      <br />
      <br />
      <Button variant="contained" onClick={toggleMatched}>
        Leave the hallway
      </Button>
    </div>
  );
};

export default Matched;
