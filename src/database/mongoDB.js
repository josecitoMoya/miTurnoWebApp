const mongoose = require("mongoose");
//dotenv started
require("dotenv").config();

const password = process.env.MONGO_PASSWORD;

const conectionString = `mongodb+srv://miTurnoWebApp:${password}@miturnowebapp-clouster.5t9mvfh.mongodb.net/?retryWrites=true&w=majority`;

//coneccion a DB

const connectDB = async () => {
  try {
    await mongoose.connect(conectionString);
    console.log("The database has been connected successfully");
  } catch (err) {
    console.error("There was a connection error on db", err);
  }
};

module.exports = connectDB;
