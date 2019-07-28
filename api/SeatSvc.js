const { Seat } = require('../model/Seat');


const loadEndpoint = (app) => {
    app.get('/seats', (req, res) => {
        console.log('URL: ' + req.url);
        Seat
            .query()
            // .findById(['S1', 'ADS'])
            .eager('reservations')
            .then((result) => { res.send(result) });
    });
}

module.exports = loadEndpoint;