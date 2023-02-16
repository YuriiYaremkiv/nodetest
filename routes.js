const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/about", (req, res) => {
  res.send("This is the about page");
});

router.get("/contact", (req, res) => {
  res.send("This is the contact page");
});

module.exports = router;
