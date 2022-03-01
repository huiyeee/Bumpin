import React from "react";
import bumpinLogo from "../bumpinlogo.png";

const AboutPanel = () => {
  return (
    <div>
      <img
        src={bumpinLogo}
        alt="Bumpin logo"
        className="center"
        style={{
          borderRadius: "50%",
          width: "15%",
          height: "15%",
          background: "white",
          border: "7px solid #393555",
          margin: "20px"
        }}
      />
      <p></p>
    </div>
  );
};

export default AboutPanel;
