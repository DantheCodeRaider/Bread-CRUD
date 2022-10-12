// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const oldBaker = require('../models/baker_seed.js')

// Index: 
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})                    
                  
// Show: 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(oldBaker)
        .then(res.redirect('/breads'))
})

// export
module.exports = baker                    
