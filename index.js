'use strict'

const router = require('express').Router()

const conn = require('./config/db-conn.js')
const
  articles = require('./routes/articles.js'),
  articleDetails = require('./routes/articleDetails'),
  articleGetComments = require('./routes/articleComments')

// all routes
router.use('/articles', articles)
router.use('/articles', articleDetails)
router.use('/articles/comments', articleGetComments)

router.get('/komen/:id', async (req, res, next) => {
  const params = req.params.id
  let sql = await `SELECT * FROM comments WHERE id_articles = ?
  `
  conn.query(sql, [params], (err, rows) => {
    if (err) return console.log(err)

    res.json(rows)
  })
})

module.exports = router