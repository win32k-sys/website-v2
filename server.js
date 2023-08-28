const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const routes = require('./routes');
app.use('/', routes);

// Console log on server start default 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});