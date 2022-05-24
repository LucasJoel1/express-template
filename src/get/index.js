const { app } = require('../imports.js');

module.exports = {
    index: app.get('/', (req, res) => {
        res.render('index');
    })
};