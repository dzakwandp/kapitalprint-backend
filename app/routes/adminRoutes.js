const {admin}=require ('../models')

module.exports = (app) =>{
    const admin = require('../controllers/adminController')
    const router = require('express').Router()

    router.post('/register', admin.register)
    router.get('/admin_login', admin.login)

    app.use('/api/admin', router)
}