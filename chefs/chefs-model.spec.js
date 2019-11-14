const db = require('../data/dbConfig')
const Chefs = require('./chefs-model');

describe('chefs model', () => {
    beforeEach(async () => {
        await db('chefs').truncate();
    })
})