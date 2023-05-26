const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/devices", (req, res) => {
  const devices = [
    {
      id: 123,
      nome: "Geladeira",
      kwh: 23,
      corrente: 2.1,
      voltagem: 127,
      fp: 1,
    },
  ];
  res.json({
    success: true,
    devices: devices,
  });
});

app.listen(PORT);
