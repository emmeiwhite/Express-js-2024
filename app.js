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

app.listen(5000, () => {
  console.log('Server is listening on port 5000')
})
