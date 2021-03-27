'use strict'

const mysql = require('mysql')
const { tableArticles } = require('./db-table')

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

async function dbConnect() {
  let articles = await tableArticles()

  conn.connect(function(err) {
    if (err) return console.log(err)

    conn.query(articles, err => err ? console.log(err) : null)
    console.log('mysql connected')
  })
}

dbConnect()
module.exports = conn