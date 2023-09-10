import express from "express";
import path from "path";

const router = express.Router();
const __dirname = path.resolve();

router.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "uv.html"));
});

router.get("/games", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "games.html"));
});

router.get("/game", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "game-fullscreen.html"));
});

router.get("/browse", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "game.html"));
});

router.get('/', (req, res) => {
  res.redirect('/home');
});

router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

router.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

export default router;