const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/locations", (request, response) => {
  queries
    .list()
    .then(locations => {
      response.json({ locations });
    })
    .catch(console.error);
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
