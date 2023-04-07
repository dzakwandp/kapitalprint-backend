const { items } = require('../models')

module.exports = (app) =>{
    const items = require('../controllers/itemController')
    const router = require('express').Router()

    router.get('/', items.findAll)
    router.post('/', items.create)
    router.get('/:id', items.findOne)
    router.put('/:id', items.update)
    router.delete('/:id', items.delete)

    app.use('/api/items', router)
}