const repo = require('./repository')

async function getFibonacciIdx(req, res) {
  const {index} = req.params

  let config = {
    baseUrl: `${req.baseUrl.toString()}`,
    originalUrl: `${req.originalUrl.toString()}`,
    params_idx: `${JSON.stringify(req.params.index)}`
  }
  try { 
    let result = fibonacci(index)
    await repo.insertReqLog(config, index, result)
    return res.json({
      status: 'success',
      result
    })
  } catch (error) {
    return res.json({
      message: error.message
    })
  }
}

function fibonacci(index) {
  if (index < 2) {
    return index
  }
  return fibonacci(index - 1) + fibonacci(index - 2)
}

module.exports = {
  getFibonacciIdx
}