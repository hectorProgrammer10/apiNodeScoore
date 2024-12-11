const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/api/data", (req, res) => {
  console.log(req.body);
  res.status(200).send("Data received");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
