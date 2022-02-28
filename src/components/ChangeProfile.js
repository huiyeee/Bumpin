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
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ChangeProfilePanel = ({ uid, email, displayName, photoURL }) => {
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
    setData(`/users/${uid}/status`, Initial);
  };

  const setProfile = () => {
    setData(`/users/${uid}/uid`, uid);
    setData(`/users/${uid}/email`, email);
    setData(`/users/${uid}/displayName`, displayName);
    setData(`/users/${uid}/photoURL`, photoURL);
    setData(`/users/${uid}/team`, team);
    setData(`/users/${uid}/status`, Initial);
  };
  return (
    <div>
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

        <Button className="b-button mui" type="submit" onClick={handleSubmit}>
          <CheckIcon/>
          Submit
        </Button>
        <Button className="b-button mui" type="submit" onClick={handleGoBack}>
          <ArrowBackIcon/>
          Go Back
        </Button>
      </form>
    </div>
  );
};

export default ChangeProfilePanel;
