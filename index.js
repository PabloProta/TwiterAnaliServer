const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()
const http = require('http').Server(app)


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