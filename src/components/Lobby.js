import React from "react";
import "../App.css";
import { Button, Typography } from "@mui/material";
import { setData, signOut } from "../utilities/firebase";
import { Matching, Profile } from "../utilities/constant";

const LobbyPanel = ({uid}) => {
  const LogOutButton = () => {
    return (
      <Button className="b-button mui" onClick={() => signOut()}>
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
        Change My Profile
      </Button>
    );
  };
  return (
    <div>
      <Typography variant="h2" sx={{ color: "#ffebee" }}>
        Would you like to enter the hallway? <br /> We'll let you know if
        someone comes in
      </Typography>
      <Button
        className="b-button mui"
        onClick={() => {
          setData(`/users/${uid}/status`, Matching);
        }}
      >
        Enter the hallway
      </Button>
      {ChangeProfileButton()} {LogOutButton()}
    </div>
  );
};

export default LobbyPanel;
