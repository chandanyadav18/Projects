const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const signInRoute = require("./api/routes/signInRoute");
const signUpRoute = require("./api/routes/signUpRoute");

mongoose.connect(
  "mongodb+srv://saurav:1234@cluster0.qid33gq.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.connection.on("error", (err) => {
  console.log("connection failed");
});

mongoose.connection.on("connected", (connected) => {
  console.log("DataBase Connected");
});

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

// this is for the signin route
app.use("/signin", signInRoute);

// this is for the signup route
app.use("/signup", signUpRoute);

// for handling the error

app.use((req, res, next) => {
  res.status(404).json({
    error: "bad request",
  });
});

module.exports = app;
