import React from "react";

function FriendForm(props) {
  function handleSubmit(ev) {
    ev.preventDefault();
    if (props.isUpdating) {
      props.updateFriend();
    } else {
      props.addFriend();
    }
  }
  return (
    <form onSubmit={handleSubmit}>
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
      <input
        type="text"
        placeholder="Image Url"
        name="imgUrl"
        value={props.friend.imgUrl}
        onChange={props.onChange}
      />

      <button style={{ background: "white" }}>
        {props.isUpdating ? "Update" : "Add Friend"}
      </button>
    </form>
  );
}

export default FriendForm;
