import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: "",
      age: "",
      email: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));
  }
  addFriend = ev => {
    ev.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    this.setState({
      friends: { ...this.state.friends, newFriend }
    });
  };
  onChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <h1>My Friends</h1>
        {this.state.friends.map(friend => (
          <div key={friend.id} friend={friend}>
            {friend.name}
          </div>
        ))}
        <form>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={this.state.age}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
          />

          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default App;
