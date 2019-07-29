const { Model } = require('objection');


class User extends Model {

    static tableName() {
        return 'USERS';
    }

    static idColumn() {
        return 'emp_id';
    }

    static relationMappings() {
        const { Reservation } = require('./Reservation');

        return {
            reservations: {
                relation: Model.HasManyRelation,
                modelClass: Reservation,
                join: {
                    from: 'USERS.emp_id',
                    to: 'RESERVATIONS.occupant'
                }
            }
        }
    }
}

module.exports = { User };

