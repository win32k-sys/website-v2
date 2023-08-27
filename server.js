const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/games', (req, res) => {
    res.sendFile(__dirname + '/public/g.html');
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/public/src/favicon.ico');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
