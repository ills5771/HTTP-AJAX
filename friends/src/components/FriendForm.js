import React from "react";

function FriendForm() {
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={this.state.name}
      />
      <input type="text" placeholder="Age" name="age" value={this.state.age} />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={this.state.email}
      />

      <button>Add</button>
    </form>
  );
}

export default FriendForm;
