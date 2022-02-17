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
import Lobby from "./components/Lobby";
import Matched from "./components/Matched";

// const Initial = 0;  // not in the hallway
// const Matching = 1; // enter the hallway then getin matching process
// const Matched = 2;  // matched successfully
// const WaitForConfirmation = 3; // wait for the confirmation from others

const App = () => {
  const [database, loading, error] = useData("/");
  const { meetingId } = useParams();
  const [user] = useUserState();
  const [matched, setMatched] = useState(false);
  // const [userStatusInHallway, setUserStatusInHallway] =  useState(Initial);

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
          {matched ? (
            <Matched toggleMatched={toggleMatched} />
          ) : (
            <Lobby uid={user.uid} toggleMatched={toggleMatched} />
          )}
          
        </header>
      </div>
    );
  }

  return <LogOn />;
};

export default App;
