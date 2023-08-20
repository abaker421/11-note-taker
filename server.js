const express= require('express')
const pageRoutes= require('./routes/pageRoutes')
const apiRpoutes= require('./routes/apiRoutes')
const PORT= 3000


const app= express()
app.listen(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use(pageRoutes)
app.use(apiRoutes)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})