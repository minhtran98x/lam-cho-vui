const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("in the middleware"); // Log when the middleware is executed
  res.send("<h1>Hello from Express!</h1>");
});

module.exports = router;
