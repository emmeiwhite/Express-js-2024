const express = require('express')
const app = express()

const { products, people } = require('./data.js')

app.get('/', (req, res) => {
  //   res.json(products)
  res.send(`
     <h1>HomePage</h1 >
     <a href="/api/products">Products</a>
    `)
})

app.get('/api/products', (req, res) => {
  // we only sent what is required from the object of arrays
  const productsUpdated = products.map(product => {
    const { id, name, image, price } = product
    return {
      id,
      name,
      image
    }
  })
  res.json(productsUpdated)
})

// Setting route for a specific product with route parameters
app.get('/api/products/:productId', (req, res) => {
  const id = req.params.productId

  const currentProduct = products.find(product => product.id === Number(id))

  if (!currentProduct) {
    res.send(`No such product with id = ${id}`)
  }
  res.json(currentProduct)
})

// Query Parameter
app.get('/api/v1/comments', (req, res) => {
  const pageNumber = req.query.page
  res.send(`Current Query String :${pageNumber}`)
})

// Let's work on a real world scenario for Query Parameter
app.get('/api/v1/products', (req, res) => {
  const { search, limit } = req.query

  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter(product => {
      return product.name.startsWith(search)
    })
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if (sortedProducts.length === 0) {
    res.send('<h2>No Products match </h2>')
  }

  res.json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000')
})
