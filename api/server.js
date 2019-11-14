const express = require('express');

const Chefs = require('../chefs/chefs-model');

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up', environment: process.env.DB_ENV})
});

server.get('/chefs', (req, res) => {

})

module.exports = server;