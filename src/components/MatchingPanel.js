import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { setData } from "../utilities/firebase";
import { Initial, Matched, Matching, PreMatch } from "../utilities/constant";
import MatchableCard from "./MatchableCard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

const MatchingPanel = ({ uid, users, setHeaderText }) => {
  const [matchIndex, setMatchIndex] = useState(0);
  const matches = Object.keys(users).filter(
    (key) =>
      users[key].status === Matching &&
      key !== uid &&
      // users[key].previous_meeting_id !== users[uid].previous_meeting_id &&
      // users[key].team !== users[uid].team &&
      users[key].roomPreference === users[uid].roomPreference
  );
  const showMatches = () => {
    if (matches.length == matchIndex) {
      setHeaderText("Matching...");
      return <></>;
    } else if (matches.length == matchIndex + 1) {
      setHeaderText("Matches found!");
      return (
        <MatchableCard myself={users[uid]} other={users[matches[matchIndex]]} />
      );
    } else {
      setHeaderText("Matches found!");
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
      <div className="matchable-cards"> {showMatches()} </div>
      <div className="matching-btns">
        <Button
          className="b-button mui"
          onClick={() => {
            console.log("Previous match index: " + matchIndex);
            setMatchIndex(
              matchIndex + 2 >= matches.length ? 0 : matchIndex + 2
            );
          }}
          data-cy="keep-walking-button"
        >
          <DirectionsWalkIcon />
          Keep walking
        </Button>
        <Button
          className="b-button mui"
          onClick={() => {
            setData(`/users/${uid}/status`, PreMatch);
          }}
          data-cy="leave-room-button"
        >
          <ExitToAppIcon />
          Leave the hallway
        </Button>
      </div>
    </div>
  );
};

export default MatchingPanel;
