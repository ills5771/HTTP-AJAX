import React from "react";
import Friend from "./Friend";

function FriendsList() {
  return (
    <div className="friends-list">
      {this.state.friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
export default FriendsList;
