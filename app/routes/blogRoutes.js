const { blogs } = require('../models')

module.exports = (app) =>{
    const blogs = require('../controllers/blogController')
    const router = require('express').Router()

    router.get('/', blogs.findAll)
    router.post('/', blogs.create)
    router.get('/:id', blogs.findOne)
    router.put('/:id', blogs.update)
    router.delete('/:id', blogs.delete)

    app.use('/api/blogs', router)
}