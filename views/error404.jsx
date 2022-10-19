const React = require('react')
const Default = require('./layouts/default')

function error404 () {
    // Confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
      return (
        <Default>
        <h2><a href="/">404 Page</a></h2>
        </Default>
      )
  }
  
module.exports = error404
