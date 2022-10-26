const http = require("http");
const url = require("url");
const aboutHandler = require("./about");

const reqHandler = function (req, res) {
  const path = url.parse(req.url).pathname;

  if (path === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World");
  } else if (path === "/about") {
    aboutHandler(req, res);
  }
  res.end();
};

const server = http.createServer(reqHandler);

// server.on("request", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.write("Hello World");
//   res.end();
// });

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
