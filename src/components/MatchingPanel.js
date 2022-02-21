import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { setData } from "../utilities/firebase";
import { Initial, Matched, Matching } from "../utilities/constant";
import MatchableCard from "./MatchableCard";

const MatchingPanel = ({ uid, users }) => {
  const showMatches = () => {
    var matches = Object.keys(users).filter(
      (key) =>
        users[key].status === Matching &&
        users[key].previous_meeting_id !== users[uid].previous_meeting_id
    );
    if (matches.length == 0) {
      return <></>;
    } else if (matches.length == 1) {
      return <MatchableCard myself={users[uid]} other={users[matches[0]]} />;
    } else {
      return (
        <>
          <MatchableCard myself={users[uid]} other={users[matches[0]]} />
          <MatchableCard myself={users[uid]} other={users[matches[1]]} />
        </>
      );
    }
  };
  return (
    <div>
      <p>Matching, please wait...</p>
      {showMatches()}
      
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
