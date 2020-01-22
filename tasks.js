const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", function(request, response) {
  console.log(request);

  response.status(200).json({
    tasks: [
      { text: "water plants", completed: true, id: 1 },
      { text: "buy milk", completed: true, id: 2 },
      { text: "call mom", completed: false, id: 3 }
    ]
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
