const { Schema, model } = require("mongoose");
const validator = require("validator");

const clientSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  dni: {
    type: Int32Array,
    required: [true, "Please enter your identification number"],
  },
  mail: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    validate: [
      validator.isStrongPassword(String, {
        minLength: 8,
        minUpperCase: 1,
        minSymbols: 1,
        minNumbers: 1,
        returnScore: false,
      }),
      "The password must have at least 8 characters, 1 capital letter, 1 number and 1 especial character",
    ],
  },
  salt: {
    type: String,
  },
});
