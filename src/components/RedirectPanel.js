import React from "react";
import {Button, Typography} from "@mui/material";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const RedirectPanel = () => {
  document.querySelector(".App-header").innerText = "Matches found!";
  return (
    <div>
      <HourglassTopIcon fontSize="large"/>
    </div>
  );
};

export default RedirectPanel;
