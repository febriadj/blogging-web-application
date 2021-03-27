'use strict'

const router = require('express').Router()
const { getArticles, postArticles, deleteArticles } = require('../controllers/articles')

router.get('/', getArticles)
router.post('/', postArticles)
router.delete('/:id', deleteArticles)

module.exports = router