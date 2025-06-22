const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const postModel = require("../models/post");

const likeRoute = express.Router();

likeRoute.get("/like/:id", isLoggedIn, async (req,res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate("user");
    
    if(post.likes.indexOf(req.user.userid) === -1) {
        post.likes.push(req.user.userid);
    } else {
        post.likes.splice(post.likes.indexOf(req.user.userid), 1);
    }
    
    await post.save();
    res.redirect("/profile");
});

module.exports = likeRoute;