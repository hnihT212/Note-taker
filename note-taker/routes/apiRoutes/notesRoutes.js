const router = require('express').Router()
const notes = require('../../db/db.json')
const {createNewNote, deleteNote} = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(notes)
})

router.post('/notes', (req, res) => {
    req.body.id = JSON.stringify(Date.now())  
    const note = createNewNote(req.body, notes)
    res.json(note)
})

router.delete('/notes/:id', (req, res) => {
    const target = notes.find(note => note.id === req.params.id)

    deleteNote(target, notes)
    res.json(target)
})

module.exports  = router;