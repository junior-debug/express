const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/file", (req, res) => {
  res.sendFile(path.resolve("javascript.png"));
});

router.get("/json", (req, res) => {
  res.json([{ name: "junior", lastName: "martinez", items: [1, 2, 3] }]);
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

module.exports = router;
