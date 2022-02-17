import React from "react";
import { Button } from "@mui/material";
import {Initial, Matched} from "../utilities/constant";
import { setData } from "../utilities/firebase";

const MatchedPanel = ({ userStatusInHallway, setUserStatusInHallway, uid }) => {
  return (
    <div style={userStatusInHallway === Matched ? {} : {display: 'none'}}>
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
      <Button variant="contained" onClick={()=>{
        removeUserFromHallway(uid);
        setUserStatusInHallway(Initial);}}>
        Leave the hallway
      </Button>
    </div>
  );
};

const removeUserFromHallway = (uid) => {
    setData(`hallway/${uid}`, null);
}

export default MatchedPanel;
