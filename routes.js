const express = require('express');
const router = express.Router();

router.get('/games', (req, res) => {
    res.sendFile(__dirname + '/public/games.html');
});

router.get('/', (req, res) => {
    res.redirect('/home');
});

router.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

router.get('/load', (req, res) => {
    res.sendFile(__dirname + '/public/loader.html');
});

router.get('/game', (req, res) => {
    res.sendFile(__dirname + '/public/game.html');
});

router.get('/docs/getting-started', (req, res) => {
    res.sendFile(__dirname + '/public/docs/readme.html');
});

router.get('/docs/', (req, res) => {
    res.redirect('/docs/getting-started');
});

router.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

module.exports = router;
