'use strict'

const router = require('express').Router()
const { articleGetComments, articlePostComments } = require('../controllers/articleComments')

router.get('/:id', articleGetComments)
router.post('/:id', articlePostComments)

module.exports = router