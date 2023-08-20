const router= require('express').Router()
const path = require('path')
const fs = require('fs/promises')
const { v4: uuidv4 } = require('uuid')
dbFilePath = path.join(__dirname, "..", "db", "db.json")


router.get('/api/notes', async (req,res) => {
    try{
    const notes = await JSON.parse(fs.readFile(dbFilePath))
    res.json(notes)
    } catch (err) {
        res.status(500).send(err)
        console.log(err)
    }
})

router.post('/api/notes', async (req,res) => {
    try{
    const content= readFile(path.join(dbFilePath, 'utf-8'))
    const notes= JSON.parse(content)
    
    
    const newNote= {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4()
    }
    
    notes.push(newNote)
    
    await fs.writeFile(path.join(dbFilePath), JSON.stringify(notes))
    
    res.status(201).json(notes)

    } catch (err) {
        res.status(500).send(err)
        console.log(err)
    }
  })

  router.delete('/api/notes/:id', async (req, res) => {
    const { id } = req.params
  
    try {
    
      const content = await fs.readFile(dbFilePath, 'utf-8')
      const notes = JSON.parse(content)
  
      const updatedNotes = notes.filter(note => note.id !== id)

      await fs.writeFile(path.join(dbFilePath), JSON.stringify(updatedNotes))
  
      res.status(200).json({ message: 'Note deleted successfully' })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal error' })
    }
  })

module.exports = router