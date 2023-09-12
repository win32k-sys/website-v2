import express from "express";
import http from "http";
import createBareServer from "@tomphttp/bare-server-node";
import path from "path";
import dotenv from "dotenv";
import routes from "./routes.js";

dotenv.config();

const __dirname = path.resolve();
const express = require('express'); 
const server = http.createServer();
const app = express();
const bareServer = createBareServer("/bare/");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

server.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.on("listening", () => {
  console.log(`Server is running on port ${port} http://localhost:${port}`);
});

server.listen(port);
