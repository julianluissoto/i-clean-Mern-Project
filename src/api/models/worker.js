const mongoose = require("mongoose");

const cleanerSchema = mongoose.Schema({
  auth0ID: String,
  name: String,
  lastName: String,
  address: String,
  qualification: Number,
  image: {
    type: String,
    required: false,
  },
  skills: String,
  clientReview: {
    type: String,
    require: false,
  },
});

const worker = mongoose.model("worker", cleanerSchema);
module.exports = worker;
