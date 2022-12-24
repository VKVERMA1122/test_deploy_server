const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ path: "./config.env" });
const Port = process.env.PORT || 8000;
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello, this data is from backend" });
});

app.listen(Port, () => {
  console.log(`server is running on ${Port}`);
});
