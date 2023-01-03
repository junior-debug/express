const e = require("express");
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

app.get("/file", (req, res) => {
  res.sendFile("./javascript.png", { root: __dirname });
});

app.get("/json", (req, res) => {
  res.json([{ name: "junior", lastName: "martinez", items: [1, 2, 3] }]);
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

app.use(express.json());
app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("usuario creado");
});

app.get("/name/:userName", (req, res) => {
  res.send(`hola ${req.params.userName}`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`resultado ${parseInt(x) + parseInt(y)}`);
});

app.get("/picture/:nameUser/data", (req, res) => {
  if (req.params.nameUser == "junior") {
    res.sendFile("./javascript.png", { root: __dirname });
  } else {
    res.send(`incorrect name ${req.params.nameUser}`);
  }
});

app.use((req, res) => {
  res.status(404).send("no se encontro tu pagina");
});

app.listen(4000);
console.log("server runing in port 4000");
