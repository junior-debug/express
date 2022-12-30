const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("./static/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.send("this is the about");
});

app.get("/weather", (req, res) => {
  res.send("is nice the weather");
});

app.get("/product", (req, res) => {
  res.send("the products");
});

app.post("/product", (req, res) => {
  res.send("receiving product");
});

app.put("/product", (req, res) => {
  res.send("updating product");
});

app.delete("/product", (req, res) => {
  res.send("deleting product");
});

app.patch("/product", (req, res) => {
  res.send("updating one products part");
});

app.use((req, res) => {
  res.status(404).send("no se encontro tu pagina");
});

app.listen(4000);
console.log("server runing in port 4000");
