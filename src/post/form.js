const imports = require('../imports.js');
const globals = require('../globals.js');
imports.app.use(imports.bodyParser.urlencoded({ extended: true }));

module.exports = {
    form: imports.app.post('/form', (req, res) => {
        console.log(req.body);
        res.redirect('/form');
    })
};