const { app } = require('../imports.js');

module.exports = {
    form: app.get('/form', (req, res) => {
        res.render('form', {
            username: '',
            password: ''
        });
    })
};