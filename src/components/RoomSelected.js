import React from "react";
import { Button } from "@mui/material";
import { setData } from "../utilities/firebase";
import { Matching } from "../utilities/constant";

const RoomSelected = ({ uid }) => {
  return (
    <>
      <Button
        className="b-button mui"
        onClick={() => {
          setData(`/users/${uid}/status`, Matching);
          setData(`/users/${uid}/roomPreference`, "game");
        }}
      >
        Enter the game room
      </Button>

      <Button
        className="b-button mui"
        onClick={() => {
          setData(`/users/${uid}/status`, Matching);
          setData(`/users/${uid}/roomPreference`, "coffee");
        }}
      >
        Enter the coffee room
      </Button>
    </>
  );
};

export default RoomSelected;
