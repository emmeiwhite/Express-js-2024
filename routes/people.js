const express = require('express')
const router = express.Router()

const { people } = require('../data')

/**--- Let's render the people array on the FE  ---*/
router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

/** --- Post request --- */
router.post('/', (req, res) => {
  const { name } = req.body

  if (!name) {
    return res.status(401).json({ success: false, msg: 'please provide name value' })
  }
  res.status(200).json({ success: true, person: name })
})

/** --- PUT --- */
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
  const { id } = req.params

  const person = people.find(person => person.id === Number(id))

  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with the id ${id}` })
  }

  const newPeople = people.filter(person => person.id !== Number(id))

  res.status(200).json({ success: true, data: newPeople })
})

module.exports = router
