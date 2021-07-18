require('dotenv').config();
const spicedPg = require("spiced-pg");

const pool = spicedPg(process.env.DATABASE_URL);

/*const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database
});*/

module.exports = pool;
