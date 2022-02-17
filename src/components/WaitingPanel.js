import React from "react";
import { Button } from "@mui/material";

const WaitingPanel = ({ setUserStatusInHallway, display }) => {
    return (
        <div style={display ? {} : {display: 'none'}}>
            <p>Waiting</p>
        </div>
    );
};

export default WaitingPanel;
