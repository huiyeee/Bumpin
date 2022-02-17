import React from "react";
import logo from "../logo.svg";
import {
  useData,
  setData,
  signInWithGoogle,
  useUserState,
} from "../utilities/firebase";
import { Button, Typography, TextField } from "@mui/material";

const AddZoomInfoPanel = ({ uid }) => {
  const [zoomLink, setZoomLink] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addZoom();
  };
  const addZoom = () => {
    setData(`users/${uid}/zoom_link`, zoomLink);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4">
          Welcome to Bumpin! Please add your zoom link!
        </Typography>
        <form
          className="new-item"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
            height: "50%",
          }}
        >
          <div style={{ width: "60%" }}>
            <TextField
              onInput={(e) => setZoomLink(e.target.value)}
              value={zoomLink}
              placeholder="https://zoom.us/my/..."
            />
          </div>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </form>
      </header>
    </div>
  );
};

export default AddZoomInfoPanel;
