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
      friend: {
        name: "",
        age: null,
        email: ""
      }
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

    axios
      .post("http://localhost:5000/friends", this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data,
          friend: {
            name: "",
            age: "",
            email: ""
          }
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
  updateFriend = (ev, id) => {
    ev.preventDefault();
    this.setState({});
  };
  onChange = ev => {
    this.setState({
      friend: {
        ...this.state.friend,
        [ev.target.name]: ev.target.value
      }
    });
  };
  render() {
    return (
      <div className="App">
        <FriendForm
          onChange={this.onChange}
          addFriend={this.addFriend}
          friend={this.state.friend}
        />

        {this.state.friends.map(friend => (
          <FriendsList
            id={friend.id}
            age={friend.age}
            name={friend.name}
            email={friend.email}
            deleteFriend={this.deleteFriend}
            updateFriend={this.updateFriend}
          />
        ))}
      </div>
    );
  }
}

export default App;
