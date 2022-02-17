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
import AddZoomInfoPanel from "./components/AddZoomInfo";
import {
  Matched,
  Initial,
  Matching,
  WaitForConfirmation,
} from "./utilities/constant";
import MatchingPanel from "./components/MatchingPanel";
import WaitingPanel from "./components/WaitingPanel";

const App = () => {
  const [users, loading, error] = useData("/users");
  const { meetingId } = useParams();
  const [user] = useUserState();
  const [userStatusInHallway, setUserStatusInHallway] = useState(Initial);

  const toggleMatched = () => {
    setMatched(!matched);
  };

  useEffect(() => {
    if (user && meetingId) {
      setData(`/users/${user.uid}/previous_meeting_id`, meetingId);
    }
  }, [user]);

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading Bumpin...</h1>;

  if (user) {
    if (users[user.uid].zoom_link)
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{user.displayName}, welcome to Bumpin!</p>
            <p>Your previous meeting ID was {meetingId}</p>
            {/* todo encapsulate the common params to make the code cleaner*/}
            <MatchedPanel
              uid={user.uid}
              zoom_link={users[user.uid].zoom_link}
              userStatusInHallway={userStatusInHallway}
              setUserStatusInHallway={setUserStatusInHallway}
            />
            <MatchingPanel
              uid={user.uid}
              users={users}
              userStatusInHallway={userStatusInHallway}
              setUserStatusInHallway={setUserStatusInHallway}
            />
            <WaitingPanel
              userStatusInHallway={userStatusInHallway}
              setUserStatusInHallway={setUserStatusInHallway}
            />
            <LobbyPanel
              uid={user.uid}
              userStatusInHallway={userStatusInHallway}
              setUserStatusInHallway={setUserStatusInHallway}
            />
          </header>
        </div>
      );
    else return <AddZoomInfoPanel uid={user.uid}></AddZoomInfoPanel>;
  }

  return <LogOn />;
};

export default App;
