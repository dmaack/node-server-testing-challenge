const knex = require('knex')
const config = require('../knexfile');
const secrets = require('../config/secrets');

const environment = secrets.environment || 'development';

module.exports = knex(config.development)