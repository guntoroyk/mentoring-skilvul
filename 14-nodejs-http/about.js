function aboutHandler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("About");
  res.end();
}

module.exports = aboutHandler;
