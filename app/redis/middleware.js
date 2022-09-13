const redis = require('redis')

let client = redis.createClient(process.env.REDIS_PORT)

client.on('error', error => {
  console.error(`Redis error : ${error}`)
})

function checkCache(req, res, next) {
  const {index} = req.params
  client.get(index, (error, data) => {
    if (error) {
      throw error
    }
    if (!data) {
      return next()
    }
    else {
      return res.json({
        data: JSON.parse(data),
        info: 'Data From Cache'
      })
    }
  })
}

module.exports = {
  checkCache
}