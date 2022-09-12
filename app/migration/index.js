const {client} = require('./db')
const fibonacciTbl = require('../fibonacci/migrations')

let migration = async () => {
  try {
    await client.connect()
    await fibonacciTbl.migration(client)
    
  } catch (error) {
    console.log(error.message);
    await client.end()
  }
}

migration()