import React from "react";
import logo from "../logo.svg";
import { setData } from "../utilities/firebase";
import {
  Button,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";

const SignUpPanel = ({ uid, email, displayName, photoURL }) => {
  const [zoomLink, setZoomLink] = React.useState("");

  const [team, setTeam] = React.useState("");
  const handleTeamChange = (event) => {
    setTeam(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProfile();
  };

  const setProfile = () => {
    setData(`${process.env.NODE_ENV}/users/${uid}/uid`, uid);
    setData(`${process.env.NODE_ENV}/users/${uid}/email`, email);
    setData(`${process.env.NODE_ENV}/users/${uid}/displayName`, displayName);
    setData(`${process.env.NODE_ENV}/users/${uid}/photoURL`, photoURL);
    setData(`${process.env.NODE_ENV}/users/${uid}/zoom_link`, zoomLink);
    setData(`${process.env.NODE_ENV}/users/${uid}/team`, team);
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
        <FormControl fullWidth>
          <InputLabel id="team-name-input">Team</InputLabel>
          <Select
            id="select-team-name"
            value={team}
            label="Team"
            onChange={handleTeamChange}
          >
            <MenuItem value={"Red"}>Red</MenuItem>
            <MenuItem value={"Purple"}>Purple</MenuItem>
            <MenuItem value={"Aqua"}>Aqua</MenuItem>
            <MenuItem value={"Green"}>Green</MenuItem>
            <MenuItem value={"Blue"}>Blue</MenuItem>
            <MenuItem value={"Orange"}>Orange</MenuItem>
            <MenuItem value={"Yellow"}>Yellow</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignUpPanel;