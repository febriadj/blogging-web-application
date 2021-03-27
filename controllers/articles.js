'use strict'

const conn = require('../config/db-conn')
const formidable = require('formidable')

// get the structure of the json article
exports.getArticles = async function(req, res, next) {
  let sql = await `SELECT * FROM articles`

  conn.query(sql, (err, rows) => {
    if (err) return console.log(err)

    res.json(rows)
  })
}

// post articles
const form = new formidable.IncomingForm()

const formUpload = (request) => new Promise((resolve, reject) => {
  form.parse(request, (err, fields, result) => {
    if (err) return reject(err)

    let { title, description } = fields
    let file = result.file

    resolve({ title, description, file })
  })
})

exports.postArticles = async function(req, res, next) {
  try {
    let form = await formUpload(req)
    res.json(form)
  }
  catch(err) {
    console.log(err)
  }
}