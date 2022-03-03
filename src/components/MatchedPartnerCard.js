import React from "react";

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
