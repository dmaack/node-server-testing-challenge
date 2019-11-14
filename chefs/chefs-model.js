const db = require('../data/dbConfig')

module.exports = {
    find,
    findBy,
    findById,
    add,
    remove
}

function find() {
    return db('chefs')
}

function findBy(filter) {
    return db('chefs')
    .where(filter)
}

function findById(id) {
    return db('chefs')
    .where({ id })
}

function add(newChef) {
    return db('chefs')
    .insert(newChef)
}

function remove(id) {
    return db('chefs')
    .where({ id })
    .delete();
}