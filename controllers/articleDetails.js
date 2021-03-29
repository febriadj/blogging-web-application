'use strict'

const conn = require('../config/db-conn')

exports.articleDetails = async function(req, res, next) {
  let params = req.params.url

  let sql = await `SELECT * FROM articles WHERE url = ?
  `
  conn.query(sql, [params], (err, rows) => {
    if (err) return console.log(err)

    res.status(200).json(rows)
  })
}