// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : process.env.DB_HOST,
//   user     : process.env.DB_USERNAME,
//   password : process.env.DB_PASSWORD,
//   database : process.env.DB_NAME
// });
 
// // open the MySQL connection
// connection.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to the database.");
//   });
  
//   module.exports = connection;

const knex = require('knex');
const configuration = require('./../knexfile');

const connection = knex(configuration.development);

module.exports = connection;