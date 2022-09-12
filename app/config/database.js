const postgres = require('pg')

const config = {
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_name,
  port: process.env.db_port
}

const pool = new postgres.Pool(config)

pool.on('connect', () => {
  console.log('Database Connected')
})

const cleanUp = () => {
  pool.end(() => {
    console.log('pool has ended');
  })
}

module.exports = {pool, cleanUp}