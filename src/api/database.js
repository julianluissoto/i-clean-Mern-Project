const mongoose = require("mongoose");

//const URI = "mongodb://0.0.0.0:27017";
const URI =
  "mongodb://mongo:7xq1s5gnipQgB4bQeNMv@containers-us-west-125.railway.app:6174";
mongoose
  .connect(process.env.URI || "mongodb://0.0.0.0:27017")
  .then((db) => console.log("im conected to DB"))
  .catch((error) => console.log(error));

module.exports = mongoose;
