const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  console.log("hitting the route");
  queries
    .list("locations")
    .then(locations => {
      console.log(locations);
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

app.get('/WOEID', (request, response) => {
  queries
    .list('WOEID')
    .then(WOEID => {
      response.json({ WOEID });
    })
    .catch(error => console.log(error));
});

app.get('/WOEID/:id', (request, response) => {
  queries
    .read(request.params.id)
    .then(WOEID => {
      WOEID ? response.json({ WOEID }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
