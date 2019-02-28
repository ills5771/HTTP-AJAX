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
        email: "",
        imgUrl: ""
      },
      isUpdating: false
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
  addFriend = () => {
    axios
      .post("http://localhost:5000/friends", this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data,
          friend: {
            name: "",
            age: "",
            email: "",
            imgUrl: ""
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
  updateForm = (ev, id) => {
    ev.preventDefault();
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      isUpdating: true
    });
  };

  updateFriend = () => {
    axios
      .put(
        `http://localhost:5000/friends/${this.state.friend.id}`,
        this.state.friend
      )
      .then(res => {
        this.setState({
          friends: res.data,
          isUpdating: false,
          friend: {
            name: "",
            age: "",
            email: "",
            imgUrl: ""
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
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
          updateForm={this.updateForm}
          updateFriend={this.updateFriend}
          friend={this.state.friend}
          isUpdating={this.state.isUpdating}
        />

        {this.state.friends.map(friend => (
          <FriendsList
            imgUrl={friend.imgUrl}
            key={friend.id}
            id={friend.id}
            age={friend.age}
            name={friend.name}
            email={friend.email}
            deleteFriend={this.deleteFriend}
            updateForm={this.updateForm}
          />
        ))}
      </div>
    );
  }
}

export default App;
