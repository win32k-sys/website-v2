const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/games', (req, res) => {
    res.sendFile(__dirname + '/public/src/games.html');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/src/home.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
