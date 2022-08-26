const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dia', (req, res) => {
    res.send('hello dia!')
})

app.get('/noite', (req, res) => {
    res.send('hello noite!')
  })

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on port ${port}`)
})