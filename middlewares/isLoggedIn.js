const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
dotenv.config();
app.use(cookieParser());

const isLoggedIn = (req, res, next) => {
    try {
        if (!req.cookies.token) return res.status(401).json({
            msg: "Not logged in"
        });
        const data = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
        req.user = data;
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }
}

module.exports = isLoggedIn;