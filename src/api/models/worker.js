const mongoose = require("mongoose");

const cleanerSchema = mongoose.Schema({
  name: String,
  lastName: String,
  address: String,
  qualification: Number,
  image: {
    type: String,
    required: false,
  },
  skills: String,
});

const worker = mongoose.model("worker", cleanerSchema);
module.exports = worker;
