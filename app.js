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
      image,
      price
    }
  })
  res.json(productsUpdated)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000')
})
