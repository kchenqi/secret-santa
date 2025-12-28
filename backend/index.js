const groups = [];

console.log("Server file started");

const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/groups", (req, res) => {
  res.json({
    message: "Group received",
    data: req.body
  });
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use(express.json());
