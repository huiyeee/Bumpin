import React, {useEffect} from "react";
import {Button} from "@mui/material";
import {setData} from "../utilities/firebase";
import {Initial, Matched, Matching} from "../utilities/constant";

const MatchingPanel = ({userStatusInHallway, setUserStatusInHallway, uid, users}) => {
    useEffect(() => {
            if (userStatusInHallway === Matching) {
                var filtered_items = Object.keys(users).filter( (key) => users[key].status === Matching &&  users[key].previous_meeting_id !== users[uid].previous_meeting_id)
                console.log(filtered_items.length)
                if (filtered_items.length !== 0){
                    console.log('can not be here')
                    setUserStatusInHallway(Matched)
                    setData(`/users/${uid}/status`, Matched);
                    setData(`/users/${filtered_items[0]}/status`, Matched);
                    

                }
            }
        }
        , [userStatusInHallway])
    return (
        <div style={userStatusInHallway === Matching ? {} : {display: 'none'}}>
            <p>Matching</p>
            <Button variant="contained" onClick={() => {
                removeUserFromHallway(uid);
                setUserStatusInHallway(Initial);
                setData(`/users/${user.uid}/status`, Initial);
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
