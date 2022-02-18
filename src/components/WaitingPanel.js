import React from "react";
import { Button } from "@mui/material";
import { WaitForConfirmation } from "../utilities/constant";

const WaitingPanel = ({ setUserStatusInHallway, userStatusInHallway }) => {
    return (
        <div style={ userStatusInHallway === WaitForConfirmation? {} : {display: 'none'}}>
            <p>Waiting</p>
        </div>
    );
};

export default WaitingPanel;
