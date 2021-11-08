const express = require("express");
const app = express();
const port = 8080;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", function (req, res) {
  res.render("index.html");
});

let resList = [];
app.get("/chat/:id", function (req, res) {
  res.name = req.params.id;
  resList.push(res);
  console.log("polling-"+req.params.id);
});

app.post("/chat", function (req, res) {
  let body = req.body;

  for (let user of resList) {
    user.send(body);
    console.log(body.type + " (To: "+body.name +"/From: "+user.name+")");
  }
  resList = [];

  res.send();
});
