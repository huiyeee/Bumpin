import React from "react";
import {
  Button
} from "@mui/material";
import {setData} from "../utilities/firebase";
import {Redirect} from "../utilities/constant";
import {Link, useSearchParams, useParams} from "react-router-dom";

const MatchedPartnerCard = ({other}) => {
  return (
    <div className="matchable-cards">
      <div className="profile">
        <img className="profile-img" src={other.photoURL}></img>
        <p className="profile-name">{other.displayName}</p>
      </div>
    </div>
  );
};

export default MatchedPartnerCard;
