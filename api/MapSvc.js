const { Map } = require('../model/Map');


const loadEndpoint = (app) => {
    app.get('/maps', (req, res) => {
        console.log('URL: ' + req.url);
        Map
            .query()
            .eager('seats')
            .then((result) => { res.send(result) });
    });
}

module.exports = loadEndpoint;