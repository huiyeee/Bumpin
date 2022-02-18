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
    <div>
      <p>It seems you need to add your meeting link. Please enter below:</p>
      <form onSubmit={handleSubmit}>
        <TextField
          onInput={(e) => setZoomLink(e.target.value)}
          value={zoomLink}
          placeholder="https://zoom.us/my/..."
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddZoomInfoPanel;
