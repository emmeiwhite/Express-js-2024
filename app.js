const express = require('express')
const app = express()

// router
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')

// static site
app.use(express.static('./methods-public'))

// form data
app.use(express.urlencoded({ extended: false }))

// json data
app.use(express.json())

// people router
app.use('/api/people', peopleRouter)
app.use('/login', authRouter)

app.listen(5000, () => {
  console.log('Listening to Port 5000')
})
