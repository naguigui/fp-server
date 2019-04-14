const express = require('express')
const bodyParser = require('body-parser')
const user = require('./app/users/router')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', user)

module.exports = { app }
