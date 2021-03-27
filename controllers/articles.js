'use strict'

const 
  conn = require('../config/db-conn'),
  formidable = require('formidable'),
  fs = require('fs'),
  crypto = require('crypto')

// get the structure of the json article
exports.getArticles = async function(req, res, next) {
  let sql = await `SELECT * FROM articles ORDER BY created_at DESC`

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

const fileSizeConvert = (bytes) => new Promise((resolve, reject) => {
  let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes == 0) return resolve('n/a')

  let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  if (i == 0) return resolve(bytes + " " + sizes[i])

  resolve((bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i])
})

exports.postArticles = async function(req, res, next) {
  try {
    const form = await formUpload(req)
    const fileSize = await fileSizeConvert(form.file.size)

    // create new file name
    const 
      createfileName = crypto.randomBytes(10).toString('hex'),
      newFileName = createfileName + '.md'

    const url = form.title.split('')
    for ( let i in url ) if (url[i] == ' ' ) url[i] = '-'

    // sql query
    let sql = `INSERT INTO articles ( title, description, url, file_name, file_size )
      VALUES ( '${form.title}', '${form.description}', '${url.join('').toLowerCase()}', '${newFileName}', '${fileSize}' )
    `
    conn.query(sql, err => {
      if (err) res.status(400).json({
        status: 'failed',
        code: 400,
        message: 'failed to add article'
      })

      if (!fs.existsSync('uploads/')) fs.mkdirSync('uploads/')

      const readfile = new Promise(resolve => {
        let file = fs.readFileSync(form.file.path)

        resolve(file)
      })

      async function writeFile() {
        let file = await readfile

        fs.writeFile('uploads/' + newFileName, file, 'utf-8', err => {
          if (err) return console.log(err)

          res.status(200).json({
            status: 'success',
            code: 200,
            message: 'managed to add to the article'
          })
        })
      }

      writeFile()
    })
  }
  catch(err) {
    console.log(err)
  }
}

exports.deleteArticles = async function(req, res, next) {
  let 
    params = req.params.id,
    sql = await `DELETE FROM articles WHERE id = ${params}`

  conn.query(sql, err => {
    if (err) return console.log(err)

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'successfully deleted the article'
    })
  })
}