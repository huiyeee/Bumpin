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
import { Redirect } from "../utilities/constant";
import { Link, useSearchParams, useParams } from "react-router-dom";

const MatchableCard = ({ myself, other }) => {
  const { meetingId } = useParams();

  const data = { myuid: myself.uid, otheruid: other.uid };

  const redirect = () => {
    setData(`/users/${myself.uid}/status`, Redirect);
    setData(`/users/${other.uid}/status`, Redirect);
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
          <Link to={`/${meetingId}/meeting/`} state={data}>
            <Button size="small" onClick={redirect}>
              Match
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default MatchableCard;
