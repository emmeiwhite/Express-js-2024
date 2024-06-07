const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const { username } = req.body

  if (username) {
    res.status(200).send(`<h1>Welcome :${username} 🌅</h1>`)
  } else {
    res.status(401).send(`<h1>Please provide Credentials</h1>`)
  }
})

// app.post('/logout', (req, res) => {
//   const { useremail } = req.body

//   if (useremail === 'test@gmail.com') {
//     res.status(200).json({ success: true, data: 'user logged out' })
//   } else {
//     res.status(401).send(`<h1>Please check your gmail and enter</h1>`)
//   }
// })

module.exports = router
