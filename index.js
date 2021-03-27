'use strict'

const router = require('express').Router()
const articles = require('./routes/articles.js')

// all routes
router.use('/articles', articles)

module.exports = router