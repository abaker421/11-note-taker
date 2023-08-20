const express= require('express')
const pageRoutes= require('./routes/pageRoutes')
const apiRoutes= require('./routes/apiRoutes')
const PORT= 3000
const db = require('./db/db.json')
const path = require('path')



const app= express()
app.listen(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(pageRoutes)
app.use(apiRoutes)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})