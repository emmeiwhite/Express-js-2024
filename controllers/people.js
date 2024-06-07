const { people } = require('../data')

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

const addPerson = (req, res) => {
  const { name } = req.body

  if (!name) {
    return res.status(401).json({ success: false, msg: 'please provide name value' })
  }
  res.status(200).json({ success: true, person: name })
}

const editPerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
  const { id } = req.params

  const person = people.find(person => person.id === Number(id))

  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with the id ${id}` })
  }

  const newPeople = people.filter(person => person.id !== Number(id))

  res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
  getPeople,
  addPerson,
  editPerson,
  deletePerson
}
