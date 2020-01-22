const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", function(req, res) {
  response.status(200).json({
    tasks: [
      { text: "water plants", completed: true, id: 1 },
      { text: "buy milk", completed: true, id: 2 },
      { text: "call mom", completed: false, id: 3 }
    ]
  });
});

module.exports.handler = serverless(app);
