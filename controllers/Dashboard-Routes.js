const router = require("express").Router();
const sequelize = require("../config/connection");
const { User } = require("../models");
const { post } = require("./homeRoutes");

module.exports = router;
