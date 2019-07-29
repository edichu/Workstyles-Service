require('./Model');
const { User } = require('./User');
const { Seat } = require('./Seat');
const { Map } = require('./Map');
const { Reservation } = require('./Reservation');

// User
//     .query()
//     // .findById(10010544)
//     .eager('reservations')
//     .then((result) => { console.log(result) });

// Seat
//     .query()
//     .eager('reservations')
//     .then((result) => { console.log(result) });

// Map
//     .query()
//     .eager('seats')
//     .then((result) => { console.log(result) });

// Reservation
//     .query()
//     .eager('[reservationBy, reservationSeat]')
//     .then((result) => { console.log(result[0]) });

console.log(__filename);