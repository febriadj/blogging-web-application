'use strict'

const conn = require('../config/db-conn')
const fs = require('fs')

exports.articleDetails = async function(req, res, next) {
  let params = req.params.url

  let sql = await `SELECT * FROM articles WHERE url = ?
  `
  conn.query(sql, [params], (err, rows) => {
    if (err) return console.log(err)

    fs.readFile('uploads/' + rows[0].file_name, 'utf-8', (err, file) => {
      if (err) return console.log(err)

      res.status(200).json({ 
        details: rows[0], 
        content: file 
      })
    })
  })
}