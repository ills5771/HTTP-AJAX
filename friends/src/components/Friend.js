import React from "react";

function Friend(props) {
  return (
    <div className="friend">
      <p>Name:{props.friend.name}</p>
      <p>Age:{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
  );
}

export default Friend;
