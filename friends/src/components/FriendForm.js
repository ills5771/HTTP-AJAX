import React from "react";

function FriendForm(props) {
  return (
    <form onSubmit={props.addFriend}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={props.name}
        onChange={props.onChange}
      />
      <input
        type="text"
        placeholder="Age"
        name="age"
        value={props.age}
        onChange={props.onChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={props.email}
        onChange={props.onChange}
      />

      <button>Add</button>
    </form>
  );
}

export default FriendForm;
