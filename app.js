const express = require('express')
const app = express()

const logger = require('./logger')

// req => middle => res

app.use(logger)

app.get('/', (req, res) => {
  res.send('<h1>Homepage</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>')
})

app.listen(5000, () => {
  console.log('Server is listening on Port 5000')
})
