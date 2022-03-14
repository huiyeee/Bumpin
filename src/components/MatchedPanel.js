import React from "react";
import { Button, Typography } from "@mui/material";
import { Initial } from "../utilities/constant";
import { setData } from "../utilities/firebase";
import { useParams, Link } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DuoIcon from "@mui/icons-material/Duo";
import MatchedPartnerCard from "./MatchedPartnerCard";

const MatchedPanel = ({ uid, other, shared_zoom_link, room, displayName }) => {
  const { meetingId } = useParams();
  return (
    <div>
      <div>
        <MatchedPartnerCard other={other} />
        <Link
          className="b-link"
          to={`/meeting?room=` + room}
          state={{ shared_zoom_link, displayName }}
        >
          <Button className="b-button mui">
            <DuoIcon />
            Click to join the meeting
          </Button>
        </Link>
      </div>
      <Button
        className="b-button mui"
        onClick={() => {
          setData(`/users/${uid}/status`, Initial);
        }}
        data-cy="leave-room-button"
      >
        <ExitToAppIcon />
        Leave the hallway
      </Button>
    </div>
  );
};

export default MatchedPanel;
