const { User } = require('../model/User');
const { Reservation } = require('../model/Reservation');


const loadEndpoint = (app) => {
    app.get('/users', (req, res) => {
        console.log('URL: ' + req.url);
        User
            .query()
            // .findById(['S1', 'ADS'])
            .eager('reservations')
            .then((result) => { res.send(result) });
    });
}

module.exports = loadEndpoint;

// app.post('/syncState', (req, res) => {
//     timers = req.body;
//     res.send(timers);
// });