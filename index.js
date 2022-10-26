require('dotenv').config({
    path: './.env'
})
const { pool } = require('./scripts/connection.js')
const express = require('express')
const PORT = process.env.PORT || 8080
const app = express()
const http = require('http').Server(app)


app.set('port', PORT)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/candidatos', async(req, res) => {
    try {
        const result = await pool.query(`SELECT politico FROM TCC_PROD GROUP BY politico LIMIT 100`)
        console.log(result)
        res.send(result.rows)
    } catch (error) {
        console.error(error)
    }
})

app.get('/plataformas', async(req, res) => {
    try {
        const result = await pool.query(`SELECT source FROM VW_Q5 LIMIT 100`)
        console.log(result)
        res.send(result.rows)
    } catch (error) {
        console.error(error)
    }
})

app.get('/regioes', async(req, res) => {
    try {
        const result = await pool.query("SELECT cidade FROM VW_Q4 LIMIT 100")
        console.log(result)
        res.send(result.rows)
    } catch (error) {
        console.error(error)
    }
})

app.get('/test', (req, res) => {
    const plataforma = ''
    const regiao = ''
    const candidato = ''
    const humores = ['positivo', 'negativo', 'neutro']
    var result = query(``)
})

http.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
})