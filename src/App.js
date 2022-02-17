import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  useData,
  setData,
  signInWithGoogle,
  useUserState,
} from "./utilities/firebase";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import LogOn from "./components/LogOn";
import LobbyPanel from "./components/Lobby";
import MatchedPanel from "./components/MatchedPanel";
import {Matched, Initial, Matching, WaitForConfirmation} from "./utilities/constant";
import MatchingPanel from "./components/MatchingPanel";
import WaitingPanel from "./components/WaitingPanel";

const App = () => {
  const [database, loading, error] = useData("/");
  const { meetingId } = useParams();
  const [user] = useUserState();
  const [userStatusInHallway, setUserStatusInHallway] =  useState(Initial);

  const toggleMatched = () => {
    setMatched(!matched);
  };

  useEffect(() => {
    if (user && meetingId) {
      setData(`/users/${user.uid}/group_id`, meetingId);
    }
  }, [user]);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading Bumpin...</h1>;

  if (user) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{user.displayName}, welcome to Bumpin!</p>
          <p>Your previous meeting ID was {meetingId}</p>
          //todo encapsulate the params
          <MatchedPanel userStatusInHallway = {userStatusInHallway} setUserStatusInHallway={setUserStatusInHallway} display={userStatusInHallway === Matched}/>
          <MatchingPanel userStatusInHallway = {userStatusInHallway} setUserStatusInHallway={setUserStatusInHallway} display={userStatusInHallway === Matching}/>
          <WaitingPanel userStatusInHallway = {userStatusInHallway} setUserStatusInHallway={setUserStatusInHallway} display={userStatusInHallway === WaitForConfirmation}/>
          <LobbyPanel userStatusInHallway={userStatusInHallway} uid={user.uid} setUserStatusInHallway={setUserStatusInHallway} display={userStatusInHallway === Initial}/>
          
        </header>
      </div>
    );
  }

  return <LogOn />;
};

export default App;
