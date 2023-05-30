const express = require("express");
const router = express.Router();
const SignIn = require("../modal/signIn");
const SignUp = require("../modal/signUp");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const checkAuth = require("../middleware/check-auth");

// getting the data from signIn Page

// router.get("/", (req, res, next) => {
//   console.log("get rqst");
//   SignIn.find()
//     .then((result) => {
//       res.status(200).json({
//         singInData: result,
//       });
//     })
//     .catch((err) => {
//       res.status(404).json({
//         message: "Data does'nt exist",
//         error: err,
//       });
//     });
// });

// same thing using async await and try catch

router.get("/", checkAuth, async (req, res, next) => {
  try {
    const result = await SignIn.find();
    res.status(200).json({
      signInData: result,
    });
  } catch (err) {
    res.status(404).json({
      message: "Data doesn't exist",
      error: err,
    });
  }
});

// getting data from frontend for authentication but not the right way below is the right way

router.post("/", async (req, res, next) => {
  try {
    const userData = {
      username: req.body.username,
      password: req.body.password,
    };

    const signInData = await SignIn.find({ username: userData.username });
    // if(signInData)
    console.log(signInData[0].password);
    if (userData.password == signInData[0].password) {
      res.status(200).json({
        message: "Success",
      });
    } else {
      res.status(403).json({
        message: "Not Authenticate",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Data not found",
      error: err,
    });
  }
});

// authentication weather user exist or not with post rqst

router.post("/login", (req, res) => {
  SignUp.find({ username: req.body.username })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          msg: "User Not Found",
        });
      }

      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (!result) {
          return res.status(401).json({
            msg: "Password not matched",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              username: user[0].username,
            },
            "this dummy secret key",
            {
              expiresIn: "24h",
            }
          );
          res.status(200).json({
            username: user[0].username,
            token: token,
          });
        }
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// storing user details just for checking this code is for signup

// router.post("/", async (req, res, next) => {
//   const singIn = new SignIn({
//     _id: new mongoose.Types.ObjectId(),
//     username: req.body.username,
//     password: req.body.password,
//   });

//   try {
//     const result = await singIn.save();
//     res.status(200).json({
//       signInData: result,
//     });
//   } catch (err) {
//     res.status(404).json({
//       message: "Couldnt create",
//       error: err,
//     });
//   }
// });

module.exports = router;
