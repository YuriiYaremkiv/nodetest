const express = require("express");
const app = express();

const routes = require("./routes");

const PORT = process.env.PORT || 3000;

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Hello World! App testing");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
