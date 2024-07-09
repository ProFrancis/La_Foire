const express = require("express");
const connectDB = require("./config/db_mongo");
const ENV = require("./config/env");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// IMPORT ROUTES
const articleRouter = require("./router/article.router");
const userRouter = require("./router/user.router");

// CONNEXION MONGO
connectDB(ENV.MONGO, ENV.DBNAME);

// APP EXPRESS
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// URLS API PREFIX
app.use("/api/article", articleRouter);
app.use("/api/user", userRouter);

module.exports = app;
