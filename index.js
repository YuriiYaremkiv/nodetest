const express = require("express");

const app = express();

// Головна сторінка
app.get("/", (req, res) => {
  res.send("Це головна сторінка");
});

// Сторінка "Про нас"
app.get("/about", (req, res) => {
  res.send('Це сторінка "Про нас"');
});

// Сторінка "Контакти"
app.get("/contact", (req, res) => {
  res.send('Це сторінка "Контакти"');
});

// Порт для прослуховування
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});
