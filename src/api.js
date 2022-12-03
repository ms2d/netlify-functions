const express = require('express')
const serverless = require('serverless-http')
const mongodb = require('mongodb')

// create new instance of express
const app = express()

// create router
const router = express.Router()

// Get Posts
router.get('/', (req, res) => {
  res.json({
    "msg": "Hello Serverless!"
  })
})

// Use the router
app.use('/.netlify/functions/api', router)

// wrap app in serverless
module.exports.handler = serverless(app)