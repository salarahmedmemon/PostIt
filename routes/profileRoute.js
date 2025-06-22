const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const userModel = require("../models/user");

const profileRoute = express.Router();

profileRoute.get("/profile", isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email }).populate("posts");
    res.render("profile", { user })
})

module.exports = profileRoute;