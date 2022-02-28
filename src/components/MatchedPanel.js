import React from "react";
import {Button, Typography} from "@mui/material";
import {Initial} from "../utilities/constant";
import {setData} from "../utilities/firebase";
import {useParams, Link} from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DuoIcon from '@mui/icons-material/Duo';
import MatchedPartnerCard from "./MatchedPartnerCard";

const MatchedPanel = ({uid, other, shared_zoom_link}) => {
  const {meetingId} = useParams();
  document.querySelector(".App-header").innerText = "You've Bump'd into someone!!";

  return (
    <div>
      <div>
        <MatchedPartnerCard other={other}/>
        <Link className="b-link" to={`/${meetingId}/meeting`} state={{shared_zoom_link}}>
          <Button
            className="b-button mui">
            <DuoIcon/>
            Click to join the meeting
          </Button>
        </Link>
      </div>
      <Button
        className="b-button mui"
        onClick={() => {
          setData(`/users/${uid}/status`, Initial);
        }}
      >
        <ExitToAppIcon/>
        Leave the hallway
      </Button>
    </div>
  );
};

export default MatchedPanel;
