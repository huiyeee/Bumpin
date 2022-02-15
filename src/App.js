import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  useData,
  setData,
  signInWithGoogle,
  useUserState,
} from "./utilities/firebase";
import { Button } from "@mui/material";

const App = () => {
  const [database, loading, error] = useData("/");
  const [user] = useUserState();
  const [matched, setMatched] = useState(false);
  const matchNumber = 1;

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the grocery list...</h1>;
  if (user)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{user.displayName}, welcome to Bumpin! You're in the hallway</p>
          {matched ? (
            <a
              className="App-link"
              href="https://northwestern.zoom.us/my/yvanchu"
              target="_blank"
              rel="noopener noreferrer"
            >
              You've bumped into someone! Click to join via Zoom [debug number:
              {matchNumber}]
            </a>
          ) : (
            <p>
              The hallway is empty... we'll let you know if someone comes in
            </p>
          )}
        </header>
      </div>
    );

  return (
    <Button variant="contained" onClick={() => signInWithGoogle()}>
      Sign In
    </Button>
  );
};

export default App;
