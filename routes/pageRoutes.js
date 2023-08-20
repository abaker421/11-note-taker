const router= require('express').Router()
const path = require('path')

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'..', 'public', 'index.html'))
}) //this can be removed once I verify line 12 works correctly

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "notes.html"))
})

router.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname,'..', 'public', 'index.html'))
}) //sends all other queries to index.html

module.exports = pageRoutes