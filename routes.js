const express = require('express');
const router = express.Router();

router.get('/games', (req, res) => {
    res.sendFile(__dirname + '/src/games.html');
});

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

router.get('/home', (req, res) => {
    res.sendFile(__dirname + '/src/home.html');
});

router.get('/load', (req, res) => {
    res.sendFile(__dirname + '/src/loader.html');
});

router.get('/404', (req, res) => {
    res.sendFile(__dirname + '/src/404.txt');
});

module.exports = router;
