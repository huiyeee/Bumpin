import React from "react";
import { Button } from "@mui/material";
import { setData } from "../utilities/firebase";
import { Redirect } from "../utilities/constant";
import { Link, useSearchParams, useParams } from "react-router-dom";

const MatchableCard = ({ myself, other }) => {
  const { meetingId } = useParams();

  const data = {
    myuid: myself.uid,
    otheruid: other.uid,
    displayName: myself.displayName,
  };

  const redirect = () => {
    setData(`/users/${myself.uid}/status`, Redirect);
    setData(`/users/${other.uid}/status`, Redirect);
  };

  return (
    <div className="profile">
      <img className="profile-img" src={other.photoURL}></img>
      <p className="profile-name">{other.displayName}</p>
      <Link
        className="b-link"
        to={`/meeting?room=` + myself.roomPreference}
        state={data}
      >
        <Button className="profile-match-btn mui" onClick={redirect}>
          Match
        </Button>
      </Link>
    </div>
  );
};

export default MatchableCard;
