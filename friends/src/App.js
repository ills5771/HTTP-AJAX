import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendForm from "./components/FriendForm";

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
      friends: [...this.state.friends, newFriend],
      name: "",
      age: "",
      email: ""
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
        <FriendForm
          addFriend={this.addFriend}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
