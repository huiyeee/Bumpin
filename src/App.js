import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useData, setData, useUserState } from "./utilities/firebase";
import { useParams } from "react-router-dom";

import LogOn from "./components/LogOn";
import LobbyPanel from "./components/Lobby";
import MatchedPanel from "./components/MatchedPanel";
import AddZoomInfoPanel from "./components/AddZoomInfo";
import {
  Matched,
  Initial,
  Matching,
  WaitForConfirmation,
} from "./utilities/constant";
import MatchingPanel from "./components/MatchingPanel";
import { Button, Typography } from "@mui/material";
import { signOut } from "./utilities/firebase";

const App = () => {
  const [users, loading, error] = useData("/users");
  const { meetingId } = useParams();
  const [user] = useUserState();

  useEffect(() => {
    if (user && meetingId) {
      setData(`/users/${user.uid}/previous_meeting_id`, meetingId);
      setData(`/users/${user.uid}/status`, Initial);
    }
  }, [user]);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading Bumpin...</h1>;

  const GetPage = () => {
    if (user) {
      if (!users[user.uid].zoom_link) {
        return <AddZoomInfoPanel uid={user.uid}></AddZoomInfoPanel>;
      } else if (users[user.uid].status === Initial) {
        return <LobbyPanel uid={user.uid}></LobbyPanel>;
      } else if (users[user.uid].status === Matching) {
        return <MatchingPanel uid={user.uid} users={users}></MatchingPanel>;
      } else if (users[user.uid].status === Matched) {
        return (
          <MatchedPanel
            uid={user.uid}
            shared_zoom_link={users[user.uid].shared_zoom_link}
          ></MatchedPanel>
        );
      }
    }
    return <LogOn />;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {GetPage()}
        {user ? (
          <Button variant="contained" onClick={() => signOut()}>
            Sign Out
          </Button>
        ) : (
          <></>
        )}
      </header>
    </div>
  );
};

export default App;
