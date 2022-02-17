import React from "react";
import { Button } from "@mui/material";
import {Initial} from "../utilities/constant";

const MatchedPanel = ({ setUserStatusInHallway, display }) => {
  return (
    <div style={display ? {} : {display: 'none'}}>
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
      <Button variant="contained" onClick={()=>{setUserStatusInHallway(Initial)}}>
        Leave the hallway
      </Button>
    </div>
  );
};

export default MatchedPanel;
