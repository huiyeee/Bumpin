import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { setData } from "../utilities/firebase";
import { Initial, Matched, Matching } from "../utilities/constant";
import MatchableCard from "./MatchableCard";

const MatchingPanel = ({ uid, users }) => {
  const [matchIndex, setMatchIndex] = useState(0);
  const matches = Object.keys(users).filter(
    (key) =>
      users[key].status === Matching &&
      users[key].previous_meeting_id !== users[uid].previous_meeting_id
  );
  const showMatches = () => {
    if (matches.length == matchIndex) {
      return <></>;
    } else if (matches.length == matchIndex + 1) {
      return (
        <MatchableCard myself={users[uid]} other={users[matches[matchIndex]]} />
      );
    } else {
      return (
        <>
          <MatchableCard
            myself={users[uid]}
            other={users[matches[matchIndex]]}
          />
          <MatchableCard
            myself={users[uid]}
            other={users[matches[matchIndex + 1]]}
          />
        </>
      );
    }
  };

  return (
    <div>
      <p>Matching, please wait...</p>
      {showMatches()}
      <Button
        className="b-button mui"
        onClick={() => {
          console.log("Previous match index: " + matchIndex);
          setMatchIndex(matchIndex + 2 >= matches.length ? 0 : matchIndex + 2);
        }}
      >
        Next
      </Button>
      <Button
        className="b-button mui"
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
