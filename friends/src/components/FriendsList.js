import React from "react";
// import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function FriendsList(props) {
  return (
    <div className="container">
      <Card className="card">
        <CardActionArea>
          <img
            style={{ width: "100%", height: "150px" }}
            src={props.imgUrl}
            alt={props.imgUrl}
          />
          <CardContent style={{ background: "#e0e0e0" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}, {props.age}
            </Typography>
            <Typography component="p">{props.email}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Button
            onClick={ev => props.deleteFriend(ev, props.id)}
            size="large"
            color="secondary"
          >
            Delete
          </Button>
          <Button
            onClick={ev => props.updateForm(ev, props.id)}
            size="large"
            color="primary"
          >
            Update
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default FriendsList;
