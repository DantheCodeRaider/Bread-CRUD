// dependencies
const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const oldBread = require('../models/oldBread.js')
const Baker = require('../models/baker.js')
const { populate } = require('../models/bread.js')


// INDEX
breads.get('/', (req, res) => {
  Bread.find()
    .populate('baker')
      .then(foundBreads => {
          res.render('Index', {
              breads: foundBreads,
        
          })
      })
}) 

// NEW
breads.get('/new', (req, res) => {
  Baker.find()
      .then(foundBakers => {
          res.render('new', {
              bakers: foundBakers
          })
    })
})

// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .populate('baker')
      .then(foundBread => {
        res.render('show', {
            bread: foundBread
        })
      })
      .catch(err => {
        res.send('error404')
      })
})


// EDIT
breads.get('/:id/edit', (req, res) => {
  Baker.find()
    .then(foundBakers => {
        Bread.findById(req.params.id)
          .then(foundBread => {
            res.render('Edit', {
                bread: foundBread, 
                bakers: foundBakers 
            })
    })
    .catch(err => {
      res.send('error404')
    })
  })
})

// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  //Bread.push(req.body)
  Bread.create(req.body)
  res.redirect('/breads')
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
    .then(updatedBread => {
      //console.log(updatedBread) 
      res.redirect(`/breads/${req.params.id}`) 
    })
})

// DELETE
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id) 
    .then(deletedBread => { 
      res.status(303).redirect('/breads')
    })
})

//SEED ROUTE
breads.get('/data/seed', (req, res) => {
  Bread.insertMany(oldBread)
    .then(createdBreads => {
      res.redirect('/breads')
    })    
    .catch(err => {
      res.send('error404')
    })
})

module.exports = breads
