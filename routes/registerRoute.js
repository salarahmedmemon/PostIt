const express = require("express");
const userValidationRules = require("../validators/userValidator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userModel = require("../models/user");
const dotenv = require("dotenv");
const { validationResult } = require("express-validator");

const registerRoute = express.Router();
const app = express();
dotenv.config();

app.use(cookieParser());

registerRoute.post("/register", userValidationRules, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render("index", { error: errors.array()[0].msg });
    }

    const { name, username, age, email, password } = req.body;
    const userFound = await userModel.findOne({ email });
    
    if (userFound) {
        return res.render("index", { error: "User already registered." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await userModel.create({ name, username, age, email, password: hashedPassword });

    const token = jwt.sign({ email, userid: user._id }, process.env.SECRET_KEY);
    res.cookie("token", token);
    res.redirect("/profile");
});

module.exports = registerRoute;