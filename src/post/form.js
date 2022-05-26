const { app, bodyParser } = require('../imports.js');
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = {
    form: app.post('/form', (req, res) => {
        console.log(req.body);
        res.render('form', {
            username: req.body.username,
            password: req.body.password
        });
    })
};