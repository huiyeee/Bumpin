import React, { useEffect } from "react";
import "./App.css";
import { useData, setData, useUserState, signOut } from "./utilities/firebase";
import { useParams } from "react-router-dom";
import { ThemeProvider, CssBaseline, Typography } from "@material-ui/core";
import LogOnPanel from "./components/LogOn";
import LobbyPanel from "./components/Lobby";
import MatchedPanel from "./components/MatchedPanel";
import SignUpPanel from "./components/SignUp";
import { Matched, Initial, Matching } from "./utilities/constant";
import MatchingPanel from "./components/MatchingPanel";
import { Button } from "@mui/material";
import Meeting from "./components/Meeting/Meeting";
import theme from "./styling/theme";
import background from "./styling/background";

const App = () => {
  const [users, loading, error] = useData(`/users`);
  const { meetingId } = useParams();
  const [user] = useUserState();

  useEffect(() => {
    if (user && meetingId) {
      console.log(user);
      setData(`/users/${user.uid}/previous_meeting_id`, meetingId);
      setData(`/users/${user.uid}/status`, Initial);
    }
  }, [user]);

  if (error) return <h1>{error}</h1>;
  if (loading || (user && users && !users[user.uid]))
    return <h1>Loading Bumpin...</h1>;

  const RenderUserStatusPanel = () => {
    if (users[user.uid].status === Initial) {
      return <LobbyPanel uid={user.uid} />;
    } else if (users[user.uid].status === Matching) {
      return <MatchingPanel uid={user.uid} users={users} />;
    } else if (users[user.uid].status === Matched) {
      return (
        <MatchedPanel
          uid={user.uid}
          shared_zoom_link={users[user.uid].shared_zoom_link}
        />
      );
    }
  };

  const LogOutButton = () => {
    return (
      <Button className="b-button mui" onClick={() => signOut()}>
        Sign Out
      </Button>
    );
  };
  const SignUpButton = () => {
    return (
      <Button
        className="b-button mui"
        onClick={() => setData(`/users/${user.uid}/zoom_link`, null)}
      >
        Change My Profile
      </Button>
    );
  };

  const RenderPage = () => {
    if (user) {
      if (users[user.uid].zoom_link) {
        return (
          <>
            {RenderUserStatusPanel()} {SignUpButton()} {LogOutButton()}
          </>
        );
      } else {
        return (
          <SignUpPanel
            uid={user.uid}
            email={user.email}
            displayName={user.displayName}
            photoURL={user.photoURL}
          />
        );
      }
    } else {
      return <LogOnPanel />;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App" style={background(user, users)}>
        <header className="App-header">{RenderPage()}</header>
      </div>
    </ThemeProvider>
  );
};

export default App;
