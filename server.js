const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: 1,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZzqLCvQbSnzbUfjwSe32VnYUbOY-8D8qV-eiPLb5vYZc8mZcsg",
    name: "Ben",
    age: 30,
    email: "ben@lambdaschool.com"
  },
  {
    id: 2,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnC-Vuep_Aw5COPwYi6jueqLyJBZcQgwsCP1FtutjysESKnOi",
    name: "Austen",
    age: 32,
    email: "austen@lambdaschool.com"
  },
  {
    id: 3,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqCz-81Fr1fwnuznYuSV2XN9Np16XQxgl2Fd10dQA4-y5CgD6",
    name: "Ryan",
    age: 35,
    email: "ryan@lambdaschool.com"
  },
  {
    id: 4,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1gUwRbJKOWq31rCo4HY-trIhQAtKY6sqT7rgXindwULsOwch",
    name: "Sean",
    age: 35,
    email: "sean@lambdaschool.com"
  },
  {
    id: 5,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDZBfq-zU1m31ifwuffkMSCMDweLu7D4td5DBaGpYEBXP6Ez8",
    name: "Michelle",
    age: 67,
    email: "michelle@gmail.com"
  },
  {
    id: 6,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMFQaSQGD2BNs1d1vpV0-T5xPwM07TE9ggkJYxdizIaYaUDG2D",
    name: "Luis",
    age: 47,
    email: "luis@lambdaschool.com"
  }
];

app.use(cors());
app.use(bodyParser.json());

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.post("/friends", (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put("/friends/:id", (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete("/friends/:id", (req, res) => {
  friends = friends.filter(friend => friend.id != req.params.id);
  res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
