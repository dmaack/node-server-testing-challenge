const router = require('express').Router();

const Chefs = require('./chefs-model');

router.get('/chefs', (req, res) => {
    Chefs.find()
    .then(chefs => {
        res.status(200).json(chefs)
    })
    .catch(err => {
        res.status(500).json({ error: 'Could not GET chefs'})
    })
})

router.post('/chefs', (req, res) => {

})

router.delete('/chefs/:id', (req, res) => {

})

module.exports = router;