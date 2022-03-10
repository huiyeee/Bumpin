import React from "react";
import "../App.css";
import { Button, Typography } from "@mui/material";
import { setData, signOut } from "../utilities/firebase";
import { Matching, PreMatch, Profile } from "../utilities/constant";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import RoomSelected from "./RoomSelected";

const LobbyPanel = ({ uid }) => {
  const LogOutButton = () => {
    return (
      <Button className="b-button mui" onClick={() => signOut()}>
        <PowerSettingsNewIcon />
        Sign Out
      </Button>
    );
  };
  const ChangeProfileButton = () => {
    return (
      <Button
        className="b-button mui"
        onClick={() =>
          // setData(`/users/${user.uid}/team`, null)
          setData(`/users/${uid}/status`, Profile)
        }
      >
        <PersonIcon />
        Change My Profile
      </Button>
    );
  };
  return (
    <div>
      <Typography variant="h3" sx={{ color: "#b0a8a8" }}>
        Would you like to enter the hallway? <br /> We'll let you know if
        someone comes in
      </Typography>
      <div className="lobby-btns">
        <Button
          className="b-button mui"
          onClick={() => {
            setData(`/users/${uid}/status`, PreMatch);
          }}
          data-cy="enter-button"
        >
          <DoorSlidingIcon />
          Enter the hallway
        </Button>
        {ChangeProfileButton()} {LogOutButton()}
      </div>
    </div>
  );
};

export default LobbyPanel;
