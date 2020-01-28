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
  const textValue = req.body.text;
  const completedValue = req.body.completed;

  connection.query(
    "INSERT INTO Task (text, completed) VALUES (?, ?)",
    [textValue, completedValue],
    function(err, data) {
      if (err) {
        response.status(500).json({ error: err });
      } else {
        response.status(200).json({
          tasks: data
        });
      }
    }
  );
});

app.delete("/tasks/:id", function(request, response) {
  const id = request.params.id;

  response.status(200).json({
    message: `You issued a delete request for ID: ${id}`
  });
});

module.exports.handler = serverless(app);
