var {openAndQuery} = require('../db');
var mysql = require('mysql');
var Promise = require('bluebird')

let messages
let users
module.exports = {
  messages: {
    get: function (callback) {

      var errHandler = (err) => {
        console.log(err)
      }

      var recordQueryResult = (result) =>{
        return new Promise((resolve, reject) =>{
          console.log('R/Q result', result)
          messages = result
          resolve(result)
      })
      }

      openAndQuery('select * from messages', [])
      .then(recordQueryResult)
      .then((data) =>{
        callback(data)
      })
      .catch(errHandler)
    }, // a function which produces all the messages
    post: function () {
      var errHandler = (err) => {
        console.log(err)
      }

      var recordQueryResult = (result) =>{
        return new Promise((resolve, reject) =>{
          console.log('R/Q result', result)
          resolve(result)
      })
      }

      openAndQuery('insert into users(username) values (?)', [])
      .then(recordQueryResult)
      .then((data) =>{
        callback(data)
      })
      .catch(errHandler)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var errHandler = (err) => {
        console.log(err)
      }

      var recordQueryResult = (result) =>{
        return new Promise((resolve, reject) =>{
          console.log('R/Q result', result)
          users = result
          resolve(result)
      })
      }

      openAndQuery('select * from users', [])
      .then(recordQueryResult)
      .then((data) =>{
        callback(data)
      })
      .catch(errHandler)
    },
    post: function () {}
  }
};

debugger

module.exports.messages.get((data) =>{
  messages = data
  console.log(messages)
})