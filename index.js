const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
require("ejs");
const userRoutes = require("./static/routes/users");
const homeRoutes = require("./static/routes/home");

//middlewares//
app.use(morgan("dev"));
app.use(userRoutes);
app.use(homeRoutes);

// app.use((req, res, next) => {
//   console.log(`la url es ${req.url} y el metodo es ${req.method}`);
//   next();
// });

// app.use((req, res, next) => {
//   if (req.query.name == "junior") {
//     next();
//   } else {
//     res.send("NO AUTORIZADO");
//   }
// });

//middlewares//

//setting//
app.set("case sensitive routing", true);
app.set("appName", "Express Course");
app.set("views", "./static/views");
app.set("view engine", "ejs");

//setting//

// app.get("/", (req, res) => {
//   res.sendFile("./static/index.html", { root: __dirname });
// });

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

app.get("/character", (req, res) => {
  if (req.query.character == "junior") {
    res.send("personaje junior");
  } else {
    res.send("personaje no encontrado");
  }
});

app.use(express.json());
app.all("/infoServer", (req, res) => {
  console.log(req.body);
  res.send("server infomation");
});

//static files//

app.use("/static", express.static("./static"));

//static files//
app.use((req, res) => {
  res.status(404).send("no se encontro tu pagina");
});

app.listen(4000);
console.log("server runing in port 4000");
