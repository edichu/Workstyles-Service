const { Model } = require('objection');
const { Seat } = require('./Seat');


class Map extends Model {

    static get tableName() {
        return 'MAPS';
    }

    static get idColumn() {
        return 'map_name';
    }

    static relationMappings() {
        return {
            seats: {
                relation: Model.HasManyRelation,
                modelClass: Seat,
                join: {
                    from: 'MAPS.map_name',
                    to: 'SEATS.map'
                }
            }
        }
    }
}

module.exports = { Map };

// Map
//     .query()
//     .eager('seats')
//     .then((result) => { console.log(result) });