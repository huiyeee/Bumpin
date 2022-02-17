import React, {useEffect} from "react";
import {Button} from "@mui/material";
import {Initial, Matched, Matching} from "../utilities/constant";

const MatchingPanel = ({userStatusInHallway, setUserStatusInHallway, uid}) => {
    useEffect(() => {
            if (userStatusInHallway === Matching) {
                // todo:  match the current user with other in the hallway
                setUserStatusInHallway(Matched)
            }
        }
        , [userStatusInHallway])
    return (
        <div style={userStatusInHallway === Matching ? {} : {display: 'none'}}>
            <p>Matching</p>
            <Button variant="contained" onClick={() => {
                removeUserFromHallway(uid);
                setUserStatusInHallway(Initial);
            }}>
                Leave the hallway
            </Button>
        </div>
    );
};

const removeUserFromHallway = (uid) => {
    setData(`hallway/${uid}`, null);
}

export default MatchingPanel;
