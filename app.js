const express = require('express')
const app = express()

const { people } = require('./data')

// let's use middleware from express | Create static site
app.use(express.static('./methods-public'))

// In order to access the form data, we'll use middleware provided by express
app.use(express.urlencoded({ extended: false }))

// Since we'll be getting the form content from JavaScript in the JSON payload, we have to handle that as well. And for this we'll use another middleware
app.use(express.json())

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

/**--- Let's render the people array on the FE  ---*/
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

/** --- Post request --- */
app.post('/api/people', (req, res) => {
  const { name } = req.body

  if (!name) {
    return res.status(401).json({ success: false, msg: 'please provide name value' })
  }
  res.status(200).json({ success: true, person: name })
})

/** --- PUT --- */
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find(person => person.id === Number(id))

  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with the id ${id}` })
  }

  const newPeople = people.map(person => {
    if (person.id === Number(id)) {
      return { ...person, name }
    }
    return person
  })

  res.status(200).json({ success: true, data: newPeople })
})

/** --- DELETE --- */
app.delete('/api/people/:id', (req, res) => {
  const { id } = req.params

  const person = people.find(person => person.id === Number(id))

  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with the id ${id}` })
  }

  const newPeople = people.filter(person => person.id !== Number(id))

  res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Listening to Port 5000')
})
