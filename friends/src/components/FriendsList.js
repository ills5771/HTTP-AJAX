// import React from "react";
// import Friend from "./Friend";

// function FriendsList(props) {
//   return (
//     <div>
//       {props.friends.map(friend => (
//         <Friend key={friend.id} friend={friend} />
//       ))}
//     </div>
//   );
// }
// export default FriendsList;

import React from "react";

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
          <CardContent style={{ background: "#e0e0e0" }}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}, {props.age}
            </Typography>
            <Typography component="p">{props.email}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={ev => props.deleteFriend(ev, props.id)}
            size="large"
            color="secondary"
          >
            Delete
          </Button>
          <Button size="large" color="primary">
            Update
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default FriendsList;
