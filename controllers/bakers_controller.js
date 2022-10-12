// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const oldBaker = require('../models/baker_seed.js')

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(oldBaker)
        .then(res.redirect('/breads'))
})

// export
module.exports = baker                    
