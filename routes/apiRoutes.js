const router= require('express').Router()
const path = require('path')
const fs = require('fs/promises')
const { v4: uuidv4 } = require('uuid')


app.get('/api/notes', async (req,res) => {
    try{
    const notes = await fs.readFile(path.join(__dirname, "..", "db", "db.json"))
    res.send(JSON.parse(notes))
    } catch (err) {
        res.status(500).send(err)
        console.log(err)
    }
})

app.post('/api/notes', async (req,res) => {
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

module.exports = router