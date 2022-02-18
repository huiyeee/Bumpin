import React, {useEffect} from "react";
import {Button} from "@mui/material";
import {setData} from "../utilities/firebase";
import {Initial, Matched, Matching} from "../utilities/constant";

const MatchingPanel = ({uid, users}) => {
    useEffect(() => {
            var filtered_items = Object.keys(users).filter( (key) => users[key].status === Matching &&  users[key].previous_meeting_id !== users[uid].previous_meeting_id)
            console.log(filtered_items.length)
            if (filtered_items.length !== 0){
                console.log('can not be here')
                // set zoom to the first person render with match panel first person zoom id
                setData(`/users/${uid}/shared_zoom_link`, users[uid].zoom_link);
                setData(`/users/${filtered_items[0]}/shared_zoom_link`, users[uid].zoom_link);

                // set status to Matched
                setData(`/users/${uid}/status`, Matched);
                setData(`/users/${filtered_items[0]}/status`, Matched);
            }
        }
        ,)
    return (
        <div>
            <p>Matching</p>
            <Button variant="contained" onClick={() => {
                setData(`/users/${user.uid}/status`, Initial);
            }}>
                Leave the hallway
            </Button>
        </div>
    );
};
export default MatchingPanel;
