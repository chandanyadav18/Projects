const { json } = require("body-parser");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    const verify = jwt.verify(token, "this dummy secret key");
    next();
  } catch (err) {
    return res.status(401).json({
      msg: "Invalid Token",
    });
  }
};

// for learning purpose if you have two kind of user than how you can use that token for two diff route
// below verify will containe everything which you have added during the creation of token
// try {
//   const token = req.headers.authorization;
//   console.log(token);
//   const verify = jwt.verify(token, "this dummy secret key");
//   if(verify.userType == "admin"){
//       next();
//   }
//   else{
//     return res.status(401).json({
//       msg: "Invalid Token",
//     });
//   }

// } catch (err) {
//   return res.status(401).json({
//     msg: "Invalid Token",
//   });
// }
