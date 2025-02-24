// // config/db.js
// const mysql = require("mysql2/promise");

// // Create a connection pool to reuse connections
// const pool = mysql.createPool({
//   host: "b9qb2i6wcb7ru3fkp9ar-mysql.services.clever-cloud.com",
//   user: "uftpi1lxgdbzjy4h",
//   password: "mpvfUpf2ZYHGw9gR2j32",

//   database: "b9qb2i6wcb7ru3fkp9ar",
//   port: 3306,

// });

// module.exports = pool;

const mysql = require("mysql2/promise");

// Create a connection pool to reuse connections
const pool = mysql.createPool({
  host: "b9qb2i6wcb7ru3fkp9ar-mysql.services.clever-cloud.com",
  user: "uftpi1lxgdbzjy4h",
  password: "mpvfUpf2ZYHGw9gR2j32",
  database: "b9qb2i6wcb7ru3fkp9ar",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
