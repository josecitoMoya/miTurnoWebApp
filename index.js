const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const app = express();
const port = 3000;
const routes = require("./routes/index");
dotenv.config();

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

app.listen(port, () => {
  console.log(`Servidor de back corriendo en puerto ${port}`);
});
