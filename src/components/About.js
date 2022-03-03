import React from "react";
import bumpinLogo from "../bumpinlogo.png";
import { ThemeProvider, CssBaseline} from "@material-ui/core";
import theme from "../styling/theme";
import "../App.css";

const AboutPanel = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App" style={background()}>
            <header className="App-header">About Bumpin</header>
            <main className="App-main"><h1 className="About-text" >Hi! Do you want to meet more of your coworkers? You can try out our Bumpin app!</h1></main>
        </div>
    </ThemeProvider>
  );
};

const background = () => {
    let url = "https://firebasestorage.googleapis.com/v0/b/bumpin-7d62f.appspot.com/o/background.png?alt=media&token=b35f2139-c32b-45ac-a713-1a194bae351e";
    return {
      backgroundImage: "url(" + url + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
  };

export default AboutPanel;
