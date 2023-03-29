const mongoose = require("mongoose");

//const URI = "mongodb://0.0.0.0:27017";
mongoose
  .connect("mongodb://0.0.0.0:27017")
  .then((db) => console.log("im conected to DB"))
  .catch((error) => console.log(error));

module.exports = mongoose;
