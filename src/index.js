const express = require('express');
const bodyParser = require('body-parser');
const { app } = require('./imports.js');
const { port, assets } = require('./globals.js');

require('./routes/get.js');
require('./routes/post.js');
require('./routes/api.js');

app.set('view engine', 'ejs');
app.set('views', './src/templates');

app.use(express.static(assets));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`\nlistening on port ${port}`);
    console.log(`visit http://localhost:${port}`);
});