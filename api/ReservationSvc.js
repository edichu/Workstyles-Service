const { Reservation } = require('../model/Reservation');


const loadEndpoint = (app) => {
    app.get('/reservations', (req, res) => {
        console.log('URL: ' + req.url);
        Reservation
        .query()
        .eager('[reservationBy, reservationSeat]')
        .then((result) => { res.send(result) });
    });
}

module.exports = loadEndpoint;