const mongoose = require("mongoose");

//const URI = "mongodb://0.0.0.0:27017";
mongoose
  .connect(
    "mongodb://mongo:7xq1s5gnipQgB4bQeNMv@containers-us-west-125.railway.app:6174" ||
      "mongodb://0.0.0.0:27017"
  )
  .then((db) => console.log("im conected to DB"))
  .catch((error) => console.log(error));

module.exports = mongoose;
