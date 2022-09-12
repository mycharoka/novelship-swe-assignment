require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const routes = require('./app/router')
const port = process.env.PORT

app.use(morgan('common'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api/fibonacci',routes)

app.listen(port, ()=> {
  console.log(`Server running on http://localhost:${port}`);
})