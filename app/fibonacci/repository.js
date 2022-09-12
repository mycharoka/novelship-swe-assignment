const { pool } = require("../config/database")
const moment = require('moment')

async function insertReqLog(data, index, result) {
  let todaysDate = moment(new Date()).format('YYYY-MM-DD')

  let jsonFormat = JSON.stringify(data)

  const query = `
    insert into fibonacci_log(request, req_index, fib_result, date, created_at)
    values ('${jsonFormat}', $1, $2, $3, current_timestamp::timestamp(0))
  `

  let values = [parseInt(index), result, todaysDate]

  try {
    let result = await pool.query(query, values)
    return result.rows[0]
  } catch (error) {
    throw error
  }
}

module.exports = {
  insertReqLog
}