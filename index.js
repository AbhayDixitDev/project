require("dotenv").config();
const express = require("express");
require("express-async-errors")
const cors = require ("cors")
const connection = require("./db");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/songs");
const playlistRoutes = require("./routes/playlists");
const searchRoutes = require("./routes/search");
const app = express();

connection()
app.use(cors());
app.use(express.json());

app.use("/api/users",userRoutes)
app.use("/api/login",authRoutes)
app.use("/api/songs",songRoutes)
app.use("/api/playlists",playlistRoutes)
app.use("/api/",searchRoutes)


const port = process.env.PORT || 8080;
const mongoose = require("mongoose");


app.listen(port, () => {
    console.log(` app listening on port ${port}`);
});