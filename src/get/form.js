const imports = require('../imports.js');
const globals = require('../globals.js');

module.exports = {
    form: imports.app.get('/form', (req, res) => {
        res.render('form');
    })
};