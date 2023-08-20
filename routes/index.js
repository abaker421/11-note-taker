const router= require('express').Router()
const pageRoutes= require('./routes/pageRoutes')
const apiRoutes= require('./routes/apiRoutes')


router.use('/api/pokemon', pokemonRoutes)
router.use('/api/trainers', trainersRoutes)
router.use('/api/moves', movesRoutes)

module.exports= router