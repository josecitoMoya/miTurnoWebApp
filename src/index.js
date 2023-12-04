const express = require("express");
const connectDB = require("./database/mongoDB");
const routes = require("./routes/index");

const app = express();
const port = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use("/api", routes);

//routes
app.use("/", (req, res) => {
  res.send("Wellcome to miTurnoWebApp");
});

connectDB();
app.listen(port, () => console.log(`Server is listening at ${port}`));
