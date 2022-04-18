// inisiasi konfigurasi .env
require("dotenv").config();

// import express
const express = require("express");

// const users = require("../db/users.json");

const route = require("./route");

// import middleware
const errorMiddleware = require("./middleware/error");

const notFoundMiddleware = require("./middleware/notFound");

// inisiasi express
const app = express();

// konfigurasi port
const port = process.env.PORT;

function getUsers(req, res) {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com",
      password: "12345",
    },
  ];
  res.json(data);
}

app.get("/users", getUsers);

//
app.use(express.static("public"));

//atur ejs sebagai view
app.set("view engine", "ejs");

// konfigurasi middleware body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//terapkan route di aplikasi
app.use(route);

// penerapan notfound dan error middleware diterapkan harus terakhir
app.use(notFoundMiddleware.notFound);
app.use(errorMiddleware.error);

// jalankan server
app.listen(port);
