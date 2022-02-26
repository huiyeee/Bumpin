import React, { useEffect } from "react";
import "./App.css";
import { useData, setData, useUserState, signOut } from "./utilities/firebase";
import { useParams } from "react-router-dom";
import theme from "./styling/theme";
import { ThemeProvider, CssBaseline, Typography } from "@material-ui/core";
import LogOnPanel from "./components/LogOn";
import LobbyPanel from "./components/Lobby";
import MatchedPanel from "./components/MatchedPanel";
import ChangeProfilePanel from "./components/ChangeProfile";
import { Matched, Initial, Matching, Profile } from "./utilities/constant";
import MatchingPanel from "./components/MatchingPanel";
import { Button } from "@mui/material";
import Meeting from "./components/Meeting/Meeting";

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
      return <LobbyPanel uid={user.uid}  />;
    } else if (users[user.uid].status === Profile){
      return (<ChangeProfilePanel
        uid={user.uid}
        email={user.email}
        displayName={user.displayName}
        photoURL={user.photoURL}
      />);
    }
    else if (users[user.uid].status === Matching) {
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

  

  const RenderPage = () => {
    if (user) {
      if (users[user.uid].uid === null){
        setData(`/users/${user.uid}/status`, Profile);
      }
      return (
        <>
          {RenderUserStatusPanel()} 
        </>
      );
    } else {
      return <LogOnPanel />;
    }
  };

  const background = () => {
    let url = "";
    if (user !== null && users[user.uid].status === Matching) {
      url =
        "https://firebasestorage.googleapis.com/v0/b/bumpin-7d62f.appspot.com/o/hallway.png?alt=media&token=eec8653d-af5b-41d7-9f51-8ec4a73cdeaf";
    } else {
      url =
        "https://firebasestorage.googleapis.com/v0/b/bumpin-7d62f.appspot.com/o/background.png?alt=media&token=b35f2139-c32b-45ac-a713-1a194bae351e";
    }
    return {
      backgroundImage: "url(" + url + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
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
