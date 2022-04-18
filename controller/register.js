const register = require("../db/data.json");

const fs = require("fs");

const getData = (req, res) => {
  res.render("./login/login");
};

const dataGet = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const id = lastItem.id + 1;
  const users = {
    id,
    email,
    password,
  };
  register.push(users);
  const data = JSON.stringify(register);
  res.status(200).json(register);
};

const takeApi = (req, res) => {
  res.send(register);
};

module.exports = { getData, dataGet, takeApi };
