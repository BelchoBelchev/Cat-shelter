const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const PORT = 5500;

const app = express();

app.get('/', (req, res) => {
    res.send('Runing...');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});