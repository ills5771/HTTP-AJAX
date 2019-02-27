import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import FriendForm from "./components/FriendForm";
import FriendsList from "./components/FriendsList";

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
        <FriendsList friends={this.state.friends} />

        <FriendForm
          onChange={this.onChange}
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
