import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { setData } from "../utilities/firebase";
import {
  Matched,
  Initial,
  Matching,
} from "../utilities/constant";

const MatchableCard = ({ myself, other }) => {
  const match = () => {
    setData(`/users/${myself.uid}/shared_zoom_link`, myself.zoom_link);
    setData(`/users/${other.uid}/shared_zoom_link`, myself.zoom_link);
    setData(`/users/${myself.uid}/status`, Matched);
    setData(`/users/${other.uid}/status`, Matched);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={other.photoURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {other.displayName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {other.team}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={match}>
            Match
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MatchableCard;
