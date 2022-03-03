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
  IconButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ChangeProfilePanel = ({ displayName, teamName, photoURL, uid }) => {
  const [team, setTeam] = React.useState(teamName);
  const [name, setName] = React.useState(displayName);
  const [editName, setEditName] = React.useState(false);
  const [editPhoto, setEditPhoto] = React.useState(false);
  const [photo, setPhoto] = React.useState(photoURL);
  // const [editTeam, setEditTeam] = React.useState(false);
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
    setData(`/users/${uid}/displayName`, name);
    setData(`/users/${uid}/team`, team);
    setData(`/users/${uid}/photoURL`, photo);
    setData(`/users/${uid}/status`, Initial);
  };
  return (
    <div>
      <div className="profile">
        <img className="profile-img" src={photo}></img>
      </div>
      
      <form onSubmit={handleSubmit}>
      {editPhoto ? (
          <>
            <TextField
              className="profile-photo-url-input"
              variant="standard"
              value={photo}
              onInput={(e) => setPhoto(e.target.value)}
            />
            <IconButton
              onClick={() => {
                setEditPhoto(false);
              }}
            >
              <CheckCircleOutlineIcon />
            </IconButton>
          </>
        ) : (
          <>
            <div className="profile-photo-url-input">{''}</div>
            <IconButton
              onClick={() => {
                setEditPhoto(true);
              }}
            >
              <EditIcon />
            </IconButton>
          </>
        )}
        {editName ? (
          <>
            <TextField
              className="profile-name-input"
              variant="standard"
              value={name}
              onInput={(e) => setName(e.target.value)}
            />
            <IconButton
              onClick={() => {
                setEditName(false);
              }}
            >
              <CheckCircleOutlineIcon />
            </IconButton>
          </>
        ) : (
          <>
            <div className="profile-name-input">{name}</div>
            <IconButton
              onClick={() => {
                setEditName(true);
              }}
            >
              <EditIcon />
            </IconButton>
          </>
        )}
        
        
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

        <div className="profile-btns">
          <Button className="b-button mui" type="submit" onClick={handleSubmit}>
            <CheckIcon />
            Submit
          </Button>
          <Button className="b-button mui" type="submit" onClick={handleGoBack}>
            <ArrowBackIcon />
            Go Back
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChangeProfilePanel;
