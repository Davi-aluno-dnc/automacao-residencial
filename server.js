const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

app.use(bodyParser.json());
const api = require("./rotas/");
app.use("/api", api);
const PORT = process.env.PORT;

console.log(process.env.MONGO_PASS);

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(PORT);
