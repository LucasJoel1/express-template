const imports = require('./imports.js');
const globals = require('./globals.js');
const get = require('./routes/get.js');
const post = require('./routes/post.js');
imports.app.set('view engine', 'ejs');
imports.app.set('views', './src/templates');
imports.app.use(imports.express.static(globals.static));
imports.app.use(imports.bodyParser.urlencoded({ extended: true }));
imports.app.use(imports.bodyParser.json());


imports.get;

imports.app.listen(globals.port, () => {
    console.log(`listening on port ${globals.port}`);
    console.log(`visit http://localhost:${globals.port}`);
});