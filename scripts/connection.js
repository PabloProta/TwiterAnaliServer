   const { Client, Pool } = require('pg')
   const client = new Client({
       user: process.env.RDS_USERNAME,
       host: process.env.RDS_HOSTNAME,
       password: process.env.RDS_PASSWORD
   })

   const pool = new Pool()

   async function query(queryText) {
       await client.connect()
       await client.query(queryText, (err, res) => {
           console.log(err, res)
           client.end
       })
   }

   module.exports = {
       query
   }