import React from "react";

function Friend(props) {
  return (
    <div className="friend">
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Friend;
