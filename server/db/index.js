var mysql = require('mysql');
var Promise = require('bluebird')




exports.openAndQuery = (query, args = [], callback = () =>{}) =>{
  return new Promise((resolve, reject) =>{
  var db = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'chat'
  });
  
  db.connect((err) =>{
    if(err){
      console.log(err)
      reject(err)
    } else {
      console.log('connection established')
    }
  })

  db.query(query, args, (err, result) =>{
    if (err){
      reject(err)
    } else {
      callback(null, result)
      resolve(result)
    }
  })
  })
}
// debugger
// exports.openAndQuery('select * from messages', [], (err, result) =>{
//   console.log(result[0].text)
// })
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


