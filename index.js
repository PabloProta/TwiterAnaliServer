const express = require('express')
const app = express()
const http = require('http').Server(app)
const PORT = process.env.PORT || 8080


app.set('port',PORT)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dia', (req, res) => {
    res.send('hello dia!')
})

app.get('/noite', (req, res) => {
    res.send('hello noite!')
  })

http.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
})