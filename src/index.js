const { app, express, bodyParser } = require('./imports.js');
const { port, static } = require('./globals.js');
const get = require('./routes/get.js');
const post = require('./routes/post.js');
const api = require('./routes/api.js');

app.set('view engine', 'ejs');
app.set('views', './src/templates');
app.use(express.static(static));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`\nlistening on port ${port}`);
    console.log(`visit http://localhost:${port}`);
});