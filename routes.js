const express = require('express');
const router = express.Router();

router.get('/games', (req, res) => {
    res.sendFile(__dirname + '/public/games.html');
});

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

router.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

router.get('/load', (req, res) => {
    res.sendFile(__dirname + '/public/loader.html');
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
  });
  

module.exports = router;
