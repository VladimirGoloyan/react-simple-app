import "@babel/polyfill";
import express from "express";
import config from "./config";
import DataApi from "./DataApi";

var { users } = require("../mockup/users.json");
var { products } = require("../mockup/products.json");
var { categories } = require("../mockup/categories.json");

DataApi.init({ categories, products, users });

var app = express();

app.use(express.static("public"));

app.set("view engine", "js");

app.get("/data/users", (req, res) => {
  res.send(DataApi.getUsers());
});

app.get("/data/products", (req, res) => {
  res.send(DataApi.getProducts());
});

app.get("/data/categories", (req, res) => {
  res.send(DataApi.getCategories());
});

app.listen(config.port, function listenHandler() {
  console.info(`Running  on ${config.port}...`);
});
