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
  

module.exports = router;
