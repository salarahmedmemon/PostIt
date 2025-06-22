const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const userModel = require("../models/user");
const postModel = require("../models/post");

const postRoute = express.Router();

postRoute.post("/post", isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email });
    let { content } = req.body;
    let post = await postModel.create({
        user: user._id,
        content
    });

    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile");
});

module.exports = postRoute;