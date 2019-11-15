const express = require('express');

const chefsRouter = require('../chefs/chefs-router');

const server = express()

server.use(express.json())

server.use('/api', chefsRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up', environment: process.env.DB_ENV})
});


module.exports = server;