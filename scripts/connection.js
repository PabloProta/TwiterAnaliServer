const { Client, Pool } = require('pg')
const pool = new Pool({
    user: process.env.RDS_USERNAME,
    host: process.env.RDS_HOSTNAME,
    password: process.env.RDS_PASSWORD
})

function query(queryText, callback) {
    client.connect(err => {
        console.log('client connected')
        if (err) {
            return console.error('Connection error', err)
        }
        client.query(queryText, (err, res) => {
            if (err) {
                console.error("error running the query", err)
            } else {
                callback(res, err, client)
            }
            closeClient()
        })
    })
}


module.exports = {
    pool
}