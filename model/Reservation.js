require('./Model');
const { Model } = require('objection');
const path  = require('path');


class Reservation extends Model {

    static get tableName() {
        return 'RESERVATIONS';
    }

    static get idColumn() {
        return ['date', 'seat', 'time_slot'];
    }

    static relationMappings() {

        return {
            reservationSeat: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, 'Seat'),
                join: {
                    from: 'RESERVATIONS.seat',
                    to: 'SEATS.seat_name'
                }
            }
            ,
            reservationBy: {
                relation: Model.BelongsToOneRelation,
                modelClass: path.join(__dirname, 'User'),
                join: {
                    from: 'RESERVATIONS.occupant',
                    to: 'USERS.emp_id'
                }
            }
        }
    }
}

module.exports = { Reservation };

// Reservation
// .query()
// .eager('[reservationBy, reservationSeat]')
// .then((result) => { console.log(result[0]) });