const express = require('express')
const app = express()

const { people } = require('./data')

// let's use middleware from express | Create static site
app.use(express.static('./methods-public'))

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.listen(5000, () => {
  console.log('Listening to Port 5000')
})
