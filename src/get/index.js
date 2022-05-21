const imports = require('../imports.js');
const globals = require('../globals.js');

module.exports = {
    index: imports.app.get('/', (req, res) => {
        res.render('index');
    })
};