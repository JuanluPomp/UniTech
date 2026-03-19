const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use("/api", require("../routes"));

app.get("/", (req, res) => {
  res.json({ message: "API running" });
});

module.exports = app;
