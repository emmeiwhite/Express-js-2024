const express = require('express')
const router = express.Router()

const { getPeople, editPerson, deletePerson, addPerson } = require('../controllers/people')

router.get('/', getPeople)

router.post('/', addPerson)

router.put('/:id', editPerson)

router.delete('/:id', deletePerson)

module.exports = router
