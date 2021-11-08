const express = require("express");
const app = express();
const port = 8080;

require("./polling_server")(app);
require("./long_polling_server")(app);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
