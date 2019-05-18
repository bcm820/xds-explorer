const express = require("express");
const path = require("path");
const { promisify } = require("util");
const fs = require("fs");

const readFile = promisify(fs.readFile);
const app = express();

app.use(express.static(path.resolve(__dirname, "dist"), { index: false }));

app.get("*", (req, res) => {
  readFile(path.resolve(__dirname, "dist", "index.html"), "utf8")
    .then(file => res.send(file))
    .catch(err => console.log(err));
});

module.exports = app;
