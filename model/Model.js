const Knex = require('knex');
const { Model } = require('objection');
const db = require('./DBConfig');

((
    () => {
        const knex = Knex(db.dev);
        Model.knex(knex);
    }
)());