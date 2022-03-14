import React from "react";
import { Button } from "@mui/material";
import { setData } from "../utilities/firebase";
import { Matching } from "../utilities/constant";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Initial } from "../utilities/constant";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const RoomSelected = ({ uid }) => {
  return (
    <>
      <div className="hallway-buttons">
      <Button
        className="hallway-buttons mui"
        onClick={() => {
          setData(`/users/${uid}/status`, Matching);
          setData(`/users/${uid}/roomPreference`, "game");
        }}
        data-cy="game-room-button"
      >
        <SportsEsportsIcon />
        Enter the game room
      </Button>
      <Button
        className="hallway-buttons mui"
        onClick={() => {
          setData(`/users/${uid}/status`, Initial);
        }}
        data-cy="leave-hallway-button"
      >
        <ExitToAppIcon />
        Leave the hallway
      </Button>
      <Button
        className="hallway-buttons mui"
        onClick={() => {
          setData(`/users/${uid}/status`, Matching);
          setData(`/users/${uid}/roomPreference`, "coffee");
        }}
        data-cy="coffee-room-button"
      >
         <EmojiFoodBeverageIcon />
        Enter the coffee room
      </Button>
     
      </div>
    </>
  );
};

export default RoomSelected;
