// import { Router } from 'express';
const express = require("express");
const router = express.Router();

// import controller
const routeController = require("./controller/home");
const gameController = require("./controller/game");
const loginController = require("./controller/login");
const registerController = require("./controller/register");
const dataController = require("./controller/data");

// api
router.get("/home", routeController.home);
router.get("/game", gameController.game);
router.get("/login", loginController.login);
router.get("/register", registerController.getData);
router.get("/data", dataController.getData);

module.exports = router;
