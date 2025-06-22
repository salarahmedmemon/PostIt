const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const postModel = require("../models/post");

const editRoute = express.Router();

editRoute.get("/edit/:id", isLoggedIn, async (req,res) => {
    let post = await postModel.findOne({ _id: req.params.id }).populate("user");
    res.render("edit", { post });
});

module.exports = editRoute;