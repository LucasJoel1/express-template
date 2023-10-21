const { app } = require('../imports.js');
const data = require('../templates/api/index.json');

module.exports = {
    index: app.get('/api', (req, res) => {
        res.json(data);
    })
};