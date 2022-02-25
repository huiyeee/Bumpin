import React from "react";
import { Button, Typography } from "@mui/material";
import { Initial } from "../utilities/constant";
import { setData } from "../utilities/firebase";
import { useParams, Link } from "react-router-dom";

const RedirectPanel = () => {
  return (
    <div>
      <div>
        <Typography>You've bumped into someone! Please wait...</Typography>
      </div>
    </div>
  );
};

export default RedirectPanel;
