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
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({
          friends: res.data,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = (ev, id) => {
    ev.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
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
        <FriendForm
          onChange={this.onChange}
          addFriend={this.addFriend}
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
        />

        {this.state.friends.map(friend => (
          <FriendsList
            id={friend.id}
            age={friend.age}
            name={friend.name}
            email={friend.email}
            deleteFriend={this.deleteFriend}
          />
        ))}
      </div>
    );
  }
}

export default App;
