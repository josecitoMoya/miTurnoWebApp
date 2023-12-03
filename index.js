const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

//db

const database = require("./config/mongoDB");

const app = express();
const port = process.env.PORT;
const routes = require("./routes/index");

//Middlewares
// app.use(
//   cors({
//     origin: process.env.CORS_URL,
//     credentials: true,
//     methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"],
//   })
// );
app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);
app.get("/ping", (req, res) => {
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

database();
app.listen(port, () => {
  console.log(`Servidor de back corriendo en puerto ${port}`);
});
