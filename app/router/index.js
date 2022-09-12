const router = require('express').Router()
const fibonacci = require('../fibonacci')

router.get('/:index', fibonacci.getFibonacciIdx)

module.exports = router