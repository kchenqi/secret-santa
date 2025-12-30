const groups = [];                                // stores groups

console.log("Server file started");

const express = require("express");               // imports express library
const app = express();                            // creates server application

app.use(express.json());                          // incoming requests might contain JSON data (puts parsed data into req.body)

app.get("/home", (req, res) => {
  res.json({ status:"ok" });                      // sends json response
});

app.post("/home", (req, res) => {
  const group = {
    id: groups.length + 1,                        // group length + 1
    name: req.body.name
  };

  groups.push(group);
  res.json(group);
});


app.listen(3000, () => {                          // starts server and opens port 3000
  console.log("Server running on port 3000");
});
