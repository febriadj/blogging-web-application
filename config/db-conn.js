'use strict'

const mysql = require('mysql')
const { tableArticles, tableComments } = require('./db-table')

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

async function dbConnect() {
  let 
    articles = await tableArticles(),
    comments = await tableComments()

  conn.connect(function(err) {
    if (err) return console.log(err)

    // create table articles and comments
    conn.query(articles, err => err ? console.log(err) : null)
    conn.query(comments, err => err ? console.log(err) : null)

    console.log('MySql Connected')
  })
}

dbConnect()
module.exports = conn