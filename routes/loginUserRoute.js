const express = require("express");
const loginLimiter = require("../middlewares/loginLimiter");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const userModel = require("../models/user");
const dotenv = require("dotenv");

const loginUserRoute = express.Router();
const app = express();
dotenv.config();

app.use(cookieParser());

loginUserRoute.post("/login", loginLimiter, async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.render("login", { error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.render("login", { error: "Invalid email or password" });
    }

    const token = jwt.sign({ email, userid: user._id }, process.env.SECRET_KEY);
    res.cookie("token", token);
    res.redirect("/profile");
});

module.exports = loginUserRoute;