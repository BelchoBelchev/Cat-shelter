const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const PORT = 5500;

const routes = require('./routes');

const app = express();

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});