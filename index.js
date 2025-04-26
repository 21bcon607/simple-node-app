const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, World!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello, World!\nDhruv Mangal");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});});
