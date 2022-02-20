import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { setData } from "../utilities/firebase";
import { Initial, Matched, Matching } from "../utilities/constant";
import MatchableCard from "./MatchableCard";

const MatchingPanel = ({ uid, users }) => {
    var matches = []
  useEffect(() => {
    matches = Object.keys(users).filter(
      (key) =>
        // users[key].status === Matching &&
        // users[key].previous_meeting_id !== users[uid].previous_meeting_id
        key === "ADxqFgIe0jZvjx6WvngsAKIBoyr1"
    );
    console.log(users[matches[0]])
    if (matches.length !== 0) {
      // setData(`/users/${uid}/shared_zoom_link`, users[uid].zoom_link);
      // setData(`/users/${matches[0]}/shared_zoom_link`, users[uid].zoom_link);
      // setData(`/users/${uid}/status`, Matched);
      // setData(`/users/${matches[0]}/status`, Matched);
    }
  });
  return (
    <div>
      <p>Matching, please wait...</p>

            <MatchableCard user = {users[matches[0]]}/>
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
