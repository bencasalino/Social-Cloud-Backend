const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").load();
var keys = require("./env");
const fetch = require("node-fetch");

var twitter = new twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY || keys.consumer_key,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET || keys.consumer_secret,
  access_token: process.env.TWITTER_ACCESS_TOKEN || keys.access_token,
  access_token_secret:
    process.env.TWITTER_TOKEN_SECRET || keys.access_token_secret
});

app.use(cors());
app.use(bodyParser.json());



app.get("/", (request, response) => {
  queries
    .list("locations")
    .then(locations => {
      response.json({ locations });
    })
    .catch(error => console.log(error));
});

app.get("/locations", (request, response) => {
  queries
    .list("locations")
    .then(locations => {
      response.json({ locations });
    })
    .catch(error => console.log(error));
});

app.get("/locations/:id", (request, response) => {
  queries
    .read(request.params.id)
    .then(locations => {
      locations ? response.json({ locations }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/locations", (request, response) => {
  queries
    .create(request.body)
    .then(locations => {
      response.status(201).json({ locations: locations });
    })
    .catch(console.error);
});

app.delete("/locations/:id", (request, response) => {
  queries
    .delete(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/locations/:id", (request, response) => {
  queries
    .update(request.params.id, request.body)
    .then(locations => {
      response.json({ locations: locations[0] });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
