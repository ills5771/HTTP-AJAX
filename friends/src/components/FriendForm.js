import React from "react";

function FriendForm(props) {
  return (
    <form onSubmit={props.addFriend}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={props.friend.name}
        onChange={props.onChange}
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={props.friend.age}
        onChange={props.onChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={props.friend.email}
        onChange={props.onChange}
      />

      <button style={{ background: "white" }}>Add Friend</button>
    </form>
  );
}

export default FriendForm;
