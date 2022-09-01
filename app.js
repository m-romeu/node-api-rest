const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json());
const api = require('./routes')

app.use('/api', api)

module.exports = app