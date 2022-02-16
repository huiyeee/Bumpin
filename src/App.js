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

const App = () => {
  const [database, loading, error] = useData("/");
  const { meetingId } = useParams();
  const [user] = useUserState();
  const [matched, setMatched] = useState(false);

  const toggleMatched = () => {
    setMatched(!matched);
  };

  useEffect(() => {
    if (user && meetingId) {
      setData(`/users/${user.uid}/group_id`, meetingId);
    }
  }, []);
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
            <Lobby toggleMatched={toggleMatched} />
          )}
        </header>
      </div>
    );
  }

  return <LogOn />;
};

export default App;
