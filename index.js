const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dia', (req, res) => {
    res.send('hello dia!')
})

app.get('/noite', (req, res) => {
    res.send('hello noite!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})