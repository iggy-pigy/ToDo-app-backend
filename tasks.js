const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", function(request, response) {
  connection.query("SELECT * FROM Task", function(err, data) {
    if (err) {
      response.status(500).json({
        error: err
      });
    } else {
      response.status(200).json({
        tasks: data
      });
    }
  });
});

app.post("/tasks", function(request, response) {
  const text = request.body.text;

  response.status(201).json({
    message: `Received a request to add task ${text}`
  });
});

app.put("/tasks/:id", function(request, response) {
  const id = request.params.id;

  response.status(200).json({
    message: `You issued a put request for ID: ${id}`
  });
});

app.delete("/tasks/:id", function(request, response) {
  const id = request.params.id;

  response.status(200).json({
    message: `You issued a delete request for ID: ${id}`
  });
});

module.exports.handler = serverless(app);
