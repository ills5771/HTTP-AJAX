import React from "react";

function FriendForm(props) {
  return (
    <form onSubmit={props.addFriend}>
      <input type="text" placeholder="Name" name="name" value={props.name} />
      <input type="text" placeholder="Age" name="age" value={props.age} />
      <input type="text" placeholder="Email" name="email" value={props.email} />

      <button>Add</button>
    </form>
  );
}

export default FriendForm;
