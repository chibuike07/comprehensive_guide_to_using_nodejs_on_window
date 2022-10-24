// const http = require("http");
// const PORT = 5000;
// const HOSTNAME = "127.0.0.1";

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("I can now set up a server.");
// });

// server.listen(PORT, HOSTNAME, () => {
//   console.log(`server ready on http://${HOSTNAME}:${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

/* A middleware that parses the body of the request and makes it available on the request object. */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = 5000;
const HOSTNAME = "127.0.0.1";

app.get("/", (req, res) => {
  res.send("I can now set up a server.");
});

app.get("/app", (req, res) => {
  fs.readFile("./app.html", (err, html) => {
    if (err) throw err;
    res.status(200).setHeader("Content-Type", "text/html").write(html);
    res.end();
  });
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`server ready on http://${HOSTNAME}:${PORT}`);
});
