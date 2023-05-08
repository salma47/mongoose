var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'sql123456',
  database: "ecomerce"
});

connection.connect((err)=>{
    if(err)throw err
    console.log("database conected")
});
module.exports={connection}