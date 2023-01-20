const express = require("express");
const router = express.Router();

router.all("/about", (req, res) => {
  const title = "Min pagina con ejs";
  const isActive = false;
  res.render("index", { title, isActive });
});

router.get("/weather", (req, res) => {
  res.send("is nice the weather");
});

router.get("/UserName", (req, res) => {
  res.send("user name");
});

router.get("/users", (req, res) => {
  res.render("users");
});
module.exports = router;
