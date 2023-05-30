const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const SignUp = require("../modal/signUp");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const otp = require("../modal/otp");
const { EMAIL, PASSWORD } = require("../../env");
const bcrypt = require("bcrypt");
const { json } = require("express");

// router.post("/", async (req, res) => {
//   // testing account if you dont have an real mail account
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transport object using the default smtp transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, //true for 465 , false for other port
//     auth: {
//       user: EMAIL, //generated ethereal user
//       pass: PASSWORD, //generated ethereal pass
//     },
//   });

//   // send mail with defined transport object
//   let message = {
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   };

//   transporter
//     .sendMail(message)
//     .then((info) => {
//       return res.status(201).json({
//         msg: "You should recieve a message",
//         info: info.messageId,
//         preview: nodemailer.getTestMessageUrl(info),
//       });
//     })
//     .catch((err) => {
//       return res.status(500).json({ err });
//     });
// });

// this for the real mail id
router.post("/otp", async (req, res) => {
  //   const { userEmail } = req.body;

  const findMail = await otp.findOne({ email: req.body.email });
  console.log(findMail);

  //   this line will return an 6 digit number
  const OTP = Math.floor(100000 + Math.random() * 900000);

  const sendEmail = () => {};

  if (!findMail) {
    const Userotp = new otp({
      email: req.body.email,
      otp: OTP,
    });
    try {
      const userotp = await Userotp.save();
      res.status(200).json(userotp);

      let config = {
        service: "gmail",
        auth: {
          user: EMAIL,
          pass: PASSWORD,
        },
      };

      let transporter = nodemailer.createTransport(config);

      let MailGenerator = new Mailgen({
        theme: "default",
        product: {
          name: "Loominate",
          link: "https://mailgen.js/",
        },
      });
      let response = {
        body: {
          name: "OTP-Verification",
          intro: "Loominate",
          table: {
            data: [
              {
                OTP: OTP,
              },
            ],
          },
          outro: "Do not share with others",
        },
      };

      let mail = MailGenerator.generate(response);
      let message = {
        from: EMAIL,
        to: userEmail,
        subject: "Your OTP ",
        html: mail,
      };

      transporter
        .sendMail(message)
        .then(() => {
          return res.status(201).json({
            msg: "You have recieved an email",
          });
        })
        .catch((error) => {
          res.status(500).json({ msg: "Failed new user mails" });
        });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    try {
      const Up = await otp.findOneAndUpdate(
        { _id: findMail._id },
        {
          otp: OTP,
        },
        { new: true }
      );
      res.status(200).json(Up);

      let config = {
        service: "gmail",
        auth: {
          user: EMAIL,
          pass: PASSWORD,
        },
      };
      let transporter = nodemailer.createTransport(config);

      let MailGenerator = new Mailgen({
        theme: "default",
        product: {
          name: "Loominate",
          link: "https://mailgen.js/",
        },
      });

      let response = {
        body: {
          name: "OTP-Verification",
          intro: "Loominate",
          table: {
            data: [
              {
                OTP: OTP,
              },
            ],
          },
          outro: "Do not share with others",
        },
      };

      let mail = MailGenerator.generate(response);
      let message = {
        from: EMAIL,
        to: req.body.email,
        subject: "Your OTP ",
        html: mail,
      };

      transporter
        .sendMail(message)
        // .then(() => {
        //   return res.status(201).json({
        //     msg: "You have recieved an email",
        //   });
        // })
        .catch((error) => {
          //   res.status(500).json({ error });
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }
});

// for checking the otp is matched or not
router.post("/fetchData", async (req, res) => {
  try {
    const result = await otp.findOne({ otp: req.body.otp });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

// for registering the new user via post reqst by dcrypt the pass

router.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    } else {
      const user = new SignUp({
        username: req.body.username,
        password: hash,
      });
      user
        .save()
        .then((result) => {
          res.status(200).json({
            result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            err,
          });
        });
    }
  });
});

module.exports = router;
