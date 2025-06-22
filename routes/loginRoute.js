const express = require("express");
const loginRoute = express.Router();

loginRoute.get("/login", (req, res) => {
  res.render("login", { error: null });
});

module.exports = loginRoute;