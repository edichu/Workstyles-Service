const { Model } = require('objection');
const { Reservation } = require('./Reservation');


class Seat extends Model {

    static tableName() {
        return 'SEATS';
    }

    static idColumn() {
        return ['seat_name', 'map'];
    }

    static relationMappings() {
        return {
            reservations: {
                relation: Model.HasManyRelation,
                modelClass: Reservation,
                join: {
                    from: 'SEATS.seat_name',
                    to: 'RESERVATIONS.seat'
                }
            }
        }
    }
}

module.exports = { Seat };

// Seat
// .query()
// // .findById(['S1', 'ADS'])
// .eager('reservations')
// .then((result) => { console.log(result) });