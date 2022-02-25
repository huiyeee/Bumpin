import React from "react";
import logo from "../logo.svg";
import { setData } from "../utilities/firebase";
import { Matched, Initial, Matching, Profile } from "../utilities/constant";
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

  const handleGoBack = (event) => {
    event.preventDefault();
    setData(`${process.env.NODE_ENV}/users/${uid}/status`, Initial);
  };

  const setProfile = () => {
    setData(`${process.env.NODE_ENV}/users/${uid}/uid`, uid);
    setData(`${process.env.NODE_ENV}/users/${uid}/email`, email);
    setData(`${process.env.NODE_ENV}/users/${uid}/displayName`, displayName);
    setData(`${process.env.NODE_ENV}/users/${uid}/photoURL`, photoURL);
    setData(`${process.env.NODE_ENV}/users/${uid}/team`, team);
    setData(`${process.env.NODE_ENV}/users/${uid}/status`, Initial);
  };

  return (
    <div>
      <p>It seems you need to add your meeting link. Please enter below:</p>
      <form onSubmit={handleSubmit}>
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

        <div className="b-button" type="submit" onClick={handleSubmit}>
          Submit
        </div>
        <div className="b-button" type="submit" onClick={handleGoBack}>
          Go Back
        </div>
      </form>
    </div>
  );
};

export default SignUpPanel;
