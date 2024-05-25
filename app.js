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

app.get('/api/products', (req, res) => {
  res.status(200).json([
    { id: 1, name: 'iphone' },
    { id: 2, name: 'macbook-pro' }
  ])
})

app.get('/api/products/:productID', (req, res) => {
  const id = req.params.productID
  res.send(`<h1>The Product with id: ${id}</h1>`)
})

app.listen(5000, () => {
  console.log('Server is listening on Port 5000')
})
