require('dotenv').config()
const {Client} = require('pg')

const client = new Client({
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_name,
  port: process.env.db_port,
  host: process.env.db_host
})

module.exports = {client}