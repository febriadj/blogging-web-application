'use strict'

const 
  express = require('express'),
  app = express(),
  dotenv = require('dotenv'),
  cors = require('cors')

// middleware
app.use(cors())
dotenv.config({ path: './.env' })

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(require('./index'))

// port server
const port = process.env.PORT || 8080

app.listen(port, function(err) {
  if (err) return console.log(err)

  console.log('Running on http://localhost:8080')
})