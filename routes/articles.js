'use strict'

const router = require('express').Router()
const { getArticles, postArticles } = require('../controllers/articles')

router.get('/', getArticles)
router.post('/', postArticles)

module.exports = router