const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs());

app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

const weatherMiddlware = require("./lib/middleware/weather");

app.use(weatherMiddlware);

app.get("/", (req, res) => {
  res.render("home");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
