const router = require('express').Router()
const fibonacci = require('../fibonacci')
const redisCheckCache = require('../redis/middleware')

router.get('/:index', redisCheckCache.checkCache, fibonacci.getFibonacciIdx)

module.exports = router