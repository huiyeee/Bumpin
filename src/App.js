import React, { useEffect, useState } from "react";
import "./App.css";
import { useData, setData, useUserState, signOut } from "./utilities/firebase";
import { useParams } from "react-router-dom";
import theme from "./styling/theme";
import { ThemeProvider, CssBaseline, Typography } from "@material-ui/core";
import LogOnPanel from "./components/LogOn";
import LobbyPanel from "./components/Lobby";
import MatchedPanel from "./components/MatchedPanel";
import ChangeProfilePanel from "./components/ChangeProfile";
import RedirectPanel from "./components/RedirectPanel";
import {
  Matched,
  Initial,
  Matching,
  Profile,
  Redirect,
  PreMatch,
} from "./utilities/constant";
import MatchingPanel from "./components/MatchingPanel";
import RoomSelected from "./components/RoomSelected";

const App = () => {
  const [headerText, setHeaderText] = useState("Welcome to Bump'n");
  const [users, loading, error] = useData(`/users`);
  const { meetingId } = useParams();
  const [user] = useUserState();
  useEffect(() => {
    if (user && meetingId) {
      setData(`/users/${user.uid}/previous_meeting_id`, meetingId);
      setData(`/users/${user.uid}/status`, Initial);
    }
  }, [user]);

  useEffect(() => {
    if (!user || !user.uid || !users[user.uid]) {
      return;
    }
    if (users[user.uid].status === Initial) {
      setHeaderText("Welcome to Bump'n");
    } else if (users[user.uid].status === Profile) {
      setHeaderText("Change my profile");
    } else if (users[user.uid].status === Matching) {
    } else if (users[user.uid].status === Redirect) {
      setHeaderText("Redirecting, please wait");
    } else if (users[user.uid].status === Matched) {
      setHeaderText("You've Bump'd into someone!!");
    }
  }, [users]);

  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    if (user && meetingId) {
      window.addEventListener("unload", handleTabClosing(user));
    }
    return () => {
      window.removeEventListener("beforeunload", alertUser);
      {
        user && meetingId ? (
          window.removeEventListener("unload", handleTabClosing(user))
        ) : (
          <></>
        );
      }
    };
  }, [user]);

  const alertUser = (event) => {
    event.preventDefault();
    event.returnValue = "Are you sure you want to close?";
  };

  const handleTabClosing = (user) => {
    resetStatus(user);
  };

  const resetStatus = (user) => {
    setData(`/users/${user.uid}/status`, Initial);
  };

  if (error) return <h1>{error}</h1>;
  if (loading || (user && users && !users[user.uid]))
    return <h1>Loading Bumpin...</h1>;

  const RenderUserStatusPanel = () => {
    if (users[user.uid].status === Initial) {
      return <LobbyPanel uid={user.uid} />;
    } else if (users[user.uid].status === Profile) {
      // let displayUser = users[user.uid]
      // if (displayUser.displayName === undefined){
      //   displayUser = user
      // }
      return (
        <ChangeProfilePanel
          displayName={users[user.uid].displayName}
          photoURL={users[user.uid].photoURL}
          teamName={users[user.uid].team}
          uid={users[user.uid].uid}
        />
      );
    } else if (users[user.uid].status === Matching) {
      return (
        <MatchingPanel
          uid={user.uid}
          users={users}
          setHeaderText={setHeaderText}
        />
      );
    } else if (users[user.uid].status === Redirect) {
      return <RedirectPanel />;
    } else if (users[user.uid].status === Matched) {
      return (
        <MatchedPanel
          uid={user.uid}
          other={users[users[user.uid].partner]}
          shared_zoom_link={users[user.uid].shared_zoom_link}
        />
      );
    } else if (users[user.uid].status === PreMatch) {
      return (
        <RoomSelected  uid={user.uid}/>
      )
    }
  };

  const RenderPage = () => {
    if (user) {
      if (users[user.uid].uid == null) {
        setData(`/users/${user.uid}/status`, Profile);
        setData(`/users/${user.uid}/uid`, user.uid);
        setData(`/users/${user.uid}/email`, user.email);
        setData(`/users/${user.uid}/displayName`, user.displayName);
        setData(`/users/${user.uid}/photoURL`, user.photoURL);
      }
      return <>{RenderUserStatusPanel()}</>;
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
        <header className="App-header" data-cy="welcome-header">
          {headerText}
        </header>
        <main className="App-main">{RenderPage()}</main>
      </div>
    </ThemeProvider>
  );
};

export default App;
