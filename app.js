const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.config");
const loginLimiter = require("./middlewares/loginLimiter");
const isLoggedIn = require("./middlewares/isLoggedIn");
const loginRoute = require("./routes/loginRoute");
const logoutRoute = require("./routes/logoutRoute");
const profileRoute = require("./routes/profileRoute");
const likeRoute = require("./routes/likeRoute");
const editRoute = require("./routes/editRoute");
const postRoute = require("./routes/postRoute");
const registerRoute = require("./routes/registerRoute");
const loginUserRoute = require("./routes/loginUserRoute");
const updatePostRoute = require("./routes/updatePostRoute");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();
connectDB();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(loginRoute);
app.use(logoutRoute);
app.use(profileRoute);
app.use(likeRoute);
app.use(editRoute);
app.use(postRoute);
app.use(registerRoute);
app.use(loginUserRoute);
app.use(updatePostRoute);

app.get("/", (req, res) => {
  res.render("index", { error: null });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("server is running on PORT: " + PORT));