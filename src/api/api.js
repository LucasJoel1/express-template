const { app } = require('../imports.js')
var data = require('../templates/api/index.json')

module.exports = {
    index: app.get('/api', (req, res) => {
        res.json(data);
    })
}