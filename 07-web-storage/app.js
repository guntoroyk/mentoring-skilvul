const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.setHeader("set-cookie", [
    "fromServerhttponly=111; HttpOnly",
    "fromserver=222",
  ]);
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/path1", (req, res) => {
  res.send(req.headers.cookie);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
