import React, {useEffect} from "react";
import {Button} from "@mui/material";
import {Initial, Matched, Matching} from "../utilities/constant";

const MatchingPanel = ({userStatusInHallway, setUserStatusInHallway, display}) => {
    useEffect(() => {
            if (userStatusInHallway === Matching) {
                //todo matching logic here
                setUserStatusInHallway(Matched)
            }
        }
        , [userStatusInHallway])
    return (
        <div style={display ? {} : {display: 'none'}}>
            <p>Matching</p>
            <Button variant="contained" onClick={() => {
                setUserStatusInHallway(Initial)
            }}>
                Leave the hallway
            </Button>
        </div>
    );
};

export default MatchingPanel;
