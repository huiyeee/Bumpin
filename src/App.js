import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  useData,
  setData,
  signInWithGoogle,
  useUserState,
} from "./utilities/firebase";
import { Button } from "@mui/material";

import LogOn from "./components/LogOn";
import Lobby from "./components/Lobby";
import Matched from "./components/Matched";

const App = () => {
  const [database, loading, error] = useData("/");
  const [user] = useUserState();
  const [matched, setMatched] = useState(false);
  const matchNumber = 1;

  const toggleMatched = () => {
    setMatched(!matched);
  };

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Entering the hallway...</h1>;
  if (user)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{user.displayName}, welcome to Bumpin!</p>
          {matched ? (
            <Matched toggleMatched={toggleMatched} />
          ) : (
            <Lobby toggleMatched={toggleMatched} />
          )}
        </header>
      </div>
    );

  return <LogOn />;
};

export default App;
