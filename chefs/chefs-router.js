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
    const chef = req.body;

    if(!chef.first_name || !chef.last_name || !chef.company) {
        res.status(400).json({ error: 'Please provide a valid request body' })
    } else {
        Chefs.add(chef)
        .then(added => {
            res.status(201).json(added)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
})

router.delete('/chefs/:id', (req, res) => {
    const id = req.params.id;

    Chefs.remove(id)
    .then(del => {
        if(del === 1) {
            res.status(200).json({ message: `Success! Chef with id ${id} was deleted`})
        } else {
            res.status(400).json({ message: 'Invalid chef id'})
        }
    })
    .catch(err => {
        res.status(500).json({ error: 'Server Error'})
    })
})

module.exports = router;