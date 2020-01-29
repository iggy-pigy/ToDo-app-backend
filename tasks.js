const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "ToDoApplication"
});

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
  const textValue = request.body.text;
  const completedValue = request.body.completed;

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

app.put("/tasks/:taskId", function(request, response) {
  const taskId = request.params.taskId;
  const updateTask = request.body;
  connection.query(
    `UPDATE Task SET ? WHERE taskId = ?`,
    [updateTask, taskId],
    function(err) {
      if (err) {
        response.status(500).json({ error: err });
      } else {
        response.sendStatus(200);
      }
    }
  );
});

app.delete("/tasks/:taskId", function(request, response) {
  const taskId = request.params.taskId;

  connection.query("DELETE FROM Task WHERE taskId = ? ", [taskId], function(
    err
  ) {
    if (err) {
      response.status(500).json({ error: err });
    } else {
      response.sendStatus(200);
    }
  });
});

module.exports.handler = serverless(app);
