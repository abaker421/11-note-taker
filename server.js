const express= require('express')
const pageRoutes= require('./routes/pageRoutes')
const apiRoutes= require('./routes/apiRoutes')
const PORT= 3000
const app= express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(apiRoutes)
app.use(pageRoutes)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})