import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [matched, setMatched] = useState(false);
  const matchNumber = 1;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Bumpin! You're in the hallway</p>
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
          <p>The hallway is empty... we'll let you know if someone comes in</p>
        )}
      </header>
    </div>
  );
};

export default App;
