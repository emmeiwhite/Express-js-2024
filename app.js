const express = require('express')

const app = express()
const jsonData = [
  {
    name: 'John'
  },
  {
    name: 'Emmei'
  }
]
app.get('/', (req, res) => {
  res.json(jsonData)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000')
})
