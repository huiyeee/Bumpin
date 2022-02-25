import React from "react";
import { Button, Typography } from "@mui/material";
import { Initial } from "../utilities/constant";
import { setData } from "../utilities/firebase";
import { useParams, Link } from "react-router-dom";

const MatchedPanel = ({ uid, shared_zoom_link }) => {
  const { meetingId } = useParams();

  return (
    <div>
      <div>
        <Typography>You've bumped into someone!</Typography>
        <Link to={`/${meetingId}/meeting`} state={{ shared_zoom_link }}>
          Click to join via Zoom
        </Link>
      </div>
      <Button
        className="b-button mui"
        onClick={() => {
          setData(`${process.env.NODE_ENV}/users/${uid}/status`, Initial);
        }}
      >
        Leave the hallway
      </Button>
    </div>
  );
};

export default MatchedPanel;
