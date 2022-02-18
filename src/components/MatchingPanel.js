import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { setData } from "../utilities/firebase";
import { Initial, Matched, Matching } from "../utilities/constant";

const MatchingPanel = ({ uid, users }) => {
  useEffect(() => {
    var matches = Object.keys(users).filter(
      (key) =>
        users[key].status === Matching &&
        users[key].previous_meeting_id !== users[uid].previous_meeting_id
    );
    if (matches.length !== 0) {
      setData(`/users/${uid}/shared_zoom_link`, users[uid].zoom_link);
      setData(`/users/${matches[0]}/shared_zoom_link`, users[uid].zoom_link);
      setData(`/users/${uid}/status`, Matched);
      setData(`/users/${matches[0]}/status`, Matched);
    }
  });
  return (
    <div>
      <p>Matching, please wait...</p>
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

export default MatchingPanel;
