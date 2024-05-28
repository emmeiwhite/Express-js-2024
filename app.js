const express = require('express')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')

// req => middle => res
// applying logger to all the routes starting with /api
// app.use('./api', logger)

/** using multiple middlewares in an array */
// app.use([logger, authorize])

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

// Providing the middleware only for this route so that it is not applied for all the routes - now the app runs smoothly
app.get('/api/customers', [logger, authorize], (req, res) => {
  // we can now access req.user
  const { name, id } = req.user
  res.status(200).json([
    {
      id,
      user: name,
      authorized: true
    }
  ])
})

app.get('/api/products/:productID', (req, res) => {
  const id = req.params.productID
  res.send(`<h1>The Product with id: ${id}</h1>`)
})

app.listen(5000, () => {
  console.log('Server is listening on Port 5000')
})
