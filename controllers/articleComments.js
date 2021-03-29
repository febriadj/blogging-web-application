'use strict'

const conn = require('../config/db-conn')

exports.articleGetComments = async function(req, res, next) {
  const params = req.params.id
  let sql = await `SELECT * from comments WHERE id_articles = ?`
  
  conn.query(sql, [params], (err, rows) => {
    if (err) return console.log(err)

    res.status(200).json(rows)
  })
}

exports.articlePostComments = async function(req, res, next) {
  const params = req.params.id
  const { username, email, comment } = req.body

  let sql = `INSERT INTO comments ( id_articles, username, email, comment )
    VALUES ( ${params}, '${username}', '${email}', '${comment}' )
  `
  conn.query(sql, err => {
    if (err) return console.log(err)

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'successfully uploaded comments'
    })
  })
}