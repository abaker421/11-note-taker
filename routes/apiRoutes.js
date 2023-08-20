const router= require('express').Router()
const path = require('path')
const fs = require('fs/promises')
const { v4: uuidv4 } = require('uuid')


router.get('/api/notes', async (req,res) => {
    try{
    const notes = await fs.readFile(path.join(__dirname, "..", "db", "db.json"))
    res.send(JSON.parse(notes))
    } catch (err) {
        res.status(500).send(err)
        console.log(err)
    }
})

router.post('/api/notes', async (req,res) => {
    try{
    const content= readFile(path.join(__dirname,'..', 'db', 'db.json', 'utf-8'))
    const notes= JSON.parse(content)
    
    
    const newNote= {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4()
    }
    
    notes.push(newNote)
    
    await writeFile(path.join(__dirname, '..', 'db', 'db.json', 'utf-8'), JSON.stringify(notes))
    
    res.status(201).json(newNote)

    } catch (err) {
        res.status(500).send(err)
        console.log(err)
    }
  })

  router.delete('/api/notes/:id', async (req, res) => {
    const { id } = req.params
  
    try {
    
      const content = await fs.readFile(path.join(__dirname,'..', 'db', 'db.json', 'utf-8'))
      const notes = JSON.parse(content)
  
      // Find and remove the note with the provided id
      const updatedNotes = notes.filter(note => note.id !== id)
  
      // Write updated data back to db.json
      await fs.writeFile(path.join(__dirname,'..', 'db', 'db.json'), JSON.stringify(updatedNotes))
  
      res.status(200).json({ message: 'Note deleted successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  })

module.exports = router