const cookieParser = require("cookie-parser");
const express = require("express");

const logoutRoute = express.Router();
const app = express();

app.use(cookieParser());

logoutRoute.get("/logout", (req, res) => {
    res.cookie("token", "");
    res.redirect("/login");
});

module.exports = logoutRoute;