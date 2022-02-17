import React from "react";
import {Button} from "@mui/material";
import {setData} from "../utilities/firebase";
import {Matched, Initial, Matching, WaitForConfirmation} from "../utilities/constant";

const LobbyPanel = ({uid, setUserStatusInHallway, userStatusInHallway}) => {
    return (
        <div style={ userStatusInHallway === Initial? {} : {display: 'none'}}>
            <p>
                Would you like to enter the hallway? we'll let you know if someone comes
                in
            </p>
            <Button variant="contained" onClick={() => {
                addUserToHallway(uid);
                setUserStatusInHallway(Matching);
            }}>
                Enter the hallway
            </Button>
        </div>
    );
};

const addUserToHallway = (uid) => {
    const userInfo = {
        uid: uid,
        enter_timestamp: Date.now(),
        meeting_id: 1111,  // TODO: add meetingID
        confirmed: false
    };

    setData(`hallway/${uid}`, userInfo);
}

export default LobbyPanel;
