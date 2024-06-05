const express = require('express')
const app = express()

const { people } = require('./data')

// let's use middleware from express | Create static site
app.use(express.static('./methods-public'))

// In order to access the form data, we'll use middleware provided by express
app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/login', (req, res) => {
  const { username } = req.body

  if (username) {
    res.status(200).send(`<h1>Welcome :${username} 🌅</h1>`)
  } else {
    res.status(401).send(`<h1>Please provide Credentials</h1>`)
  }
})

app.post('/logout', (req, res) => {
  const { useremail } = req.body

  if (useremail === 'test@gmail.com') {
    res.status(200).json({ success: true, data: 'user logged out' })
  } else {
    res.status(401).send(`<h1>Please check your gmail and enter</h1>`)
  }
})

app.listen(5000, () => {
  console.log('Listening to Port 5000')
})
