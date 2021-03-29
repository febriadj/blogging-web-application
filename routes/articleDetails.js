'use strict'

const router = require('express').Router()
const { articleDetails } = require('../controllers/articleDetails')

router.get('/:url', articleDetails)

module.exports = router