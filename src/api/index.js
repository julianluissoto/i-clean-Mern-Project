const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const { mongoose } = require("./database");

//settings
app.set("port", process.env.PORT || 3001);
//CORS
app.use(cors());
let whiteList = ["http://localhost:5173"];
//middlewares
app.use(morgan("dev")); //show on the console the request and response to the backend
app.use(express.json());

//routes
app.use("/api/worker", require("./routes/worker.routes"));

//static

app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log(`listening on ${app.get("port")}`);
});
