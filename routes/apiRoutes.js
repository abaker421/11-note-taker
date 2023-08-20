const router= require('express').Router()
const path = require('path')
const fs = require('fs')


app.get('/api/notes', async (req,res) => {
    const notes = await fs.readFile('./db/db.json','utf8')
    res.send(JSON.parse(notes))
})

app.post('/api/create-pet', async (req,res) => {

    const content= readFile(path.join(__dirname,'..', 'db', 'db.json', 'utf-8'))
    const notes= JSON.parse(content)
    
    
    const newNote= {
      ...req.body,
      id:
    }
    
    notes.push(newNote)
    
    await writeFile(path.join(__dirname, '..', 'db', 'db.json', 'utf-8'), JSON.stringify(notes, null, 2))
    
    res.stauts(201).json(newNote)
  })

module.exports = router