const { Seat } = require('../model/Seat');


const loadEndpoint = (app) => {
    app.get('/seats', (req, res) => {
        console.log('URL: ' + req.url);
        Seat
            .query()
            .eager('reservations')
            .then((result) => { res.send(result) });
    });

    app.get('/seats/[A-Z0-9]+/[A-Z0-9]+*', (req, res) => {
        console.log('URL: ' + req.url);
        const tokens = req.url.split("/");
        const location = tokens[2];
        const seat = tokens[3];

        Seat
            .query()
            .findById([seat, location])
            .eager('reservations')
            .then((result) => { console.log(result); return result })
            .then((result) => { res.send((result)) });
    });
}



module.exports = loadEndpoint;