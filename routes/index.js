const express = require("express");
const app = express();
const port = 3000;

app.use("/superMiddleware", (req, res, next) => {
  console.log("hello middleware");
  next();
});

app.get("/superMiddleware", (req, res) => {
  res.send("hello world");
});

app.listen(port, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});
