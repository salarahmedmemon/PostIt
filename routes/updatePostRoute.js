const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const postModel = require("../models/post")

const updatePostRoute = express.Router(); 

updatePostRoute.post("/update/:id", isLoggedIn, async (req,res) => {
    await postModel.findOneAndUpdate(
        { _id: req.params.id }, 
        { content: req.body.content }
    );
    res.redirect("/profile");
});


module.exports = updatePostRoute;