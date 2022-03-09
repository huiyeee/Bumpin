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
      {/* <div className="profile">
        <img
          className="profile-img"
          src={
            "https://images.squarespace-cdn.com/content/v1/5bfdafa63917eec8bc387b85/1560564506941-8HTL1GRDEX0UKW0964YT/APC_0050.JPG?format=2500w"
          }
        ></img>
        <p className="profile-name">{"Coffee Room"}</p>
      </div> */}
      <Button
        className="b-button mui"
        onClick={() => {
          setData(`/users/${uid}/status`, Matching);
          setData(`/users/${uid}/roomPreference`, "game");
        }}
      >
        <SportsEsportsIcon />
        Enter the game room
      </Button>
      <Button
        className="b-button mui"
        onClick={() => {
          setData(`/users/${uid}/status`, Matching);
          setData(`/users/${uid}/roomPreference`, "coffee");
        }}
      >
        <EmojiFoodBeverageIcon />
        Enter the coffee room
      </Button>
      <Button
        className="b-button mui"
        onClick={() => {
          setData(`/users/${uid}/status`, Initial);
        }}
      >
        <ExitToAppIcon />
        Leave the hallway
      </Button>
    </>
  );
};

export default RoomSelected;
