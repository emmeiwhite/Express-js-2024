const express = require('express')
const app = express()

// req => middle => res
// middleware sits in b/w req and res so to say and middleware is everywhere in nodejs

/** Say we want to add logger information of each request */

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()

  console.log(method, url, time)

  next()
}

app.get('/', logger, (req, res) => {
  res.send('<h1>Homepage</h1>')
})

app.get('/about', logger, (req, res) => {
  res.send('<h1>About Page</h1>')
})

app.listen(5000, () => {
  console.log('Server is listening on Port 5000')
})
