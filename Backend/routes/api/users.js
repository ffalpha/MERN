const express = require("express");
const router = express.Router();

//@route post api/users
//@desc Test route
//@access PUblic
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("User route");
});

module.exports = router;
