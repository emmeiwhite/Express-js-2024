const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Homepage</h1>')
})
app.listen(5000, () => {
  console.log('Server is listening on Port 5000')
})
