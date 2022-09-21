require('dotenv').config({
    path: './.env'
})
const { query } = require('./scripts/connection.js')
const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()
const http = require('http').Server(app)


app.set('port', PORT)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/canditado/bolsonaro/tweets/total', (req, res) => {
    query(`SELECT * FROM TCC_PROD LIMIT 100`)
})

http.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
})