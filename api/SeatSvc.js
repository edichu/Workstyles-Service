const { Seat } = require('../model/Seat');


const loadEndpoint = (app) => {
    app.get('/seats', (req, res) => {
        console.log('URL: ' + req.url);
        Seat
            .query()
            .eager('reservations')
            .then((result) => { res.send(result) });
    });

    app.get('/seats/[A-Z0-9]+/[A-Z0-9]+', (req, res) => {
        console.log('URL: ' + req.url);
        const tokens = req.url.split("/");
        const location = tokens[2];
        const seat = tokens[3];
        const date = tokens[4];

        Seat
            .query()
            .findById([seat, location])
            .eager('reservations')
            .then((result) => { if (result) { return result } else { return {} } })
            .then((result) => { res.send((result)) });
    });

    app.get('/seats/[A-Z0-9]+/[A-Z0-9]+/*', (req, res) => {
        const tokens = req.url.split("/");
        const location = tokens[2];
        const seat = tokens[3];
        const date = tokens[4];

        console.log('URL: ' + req.url + '. Date: ' + date);

        Seat
            .query()
            .findById([seat, location])
            .eager('reservations')
            .then((result) => { res.send((filterByDate(date, result))) });
    });
}

const filterByDate = (date, result) => {
    if (result) {
        result.reservations = result.reservations.filter(reservation => reservation.date === date);

        return result;
    } else {
        return {};
    }
}

module.exports = loadEndpoint;