const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    require: true,
  },
  mail: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  salt: {
    type: String,
  },
});

module.exports = model("Client", clientSchema);
