const dbConfig = require('../../config/dbConfig')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url
db.items = require('./itemModel')(mongoose)
db.blogs = require('./blogModel')(mongoose)
db.admin = require('./adminModel')(mongoose)

module.exports = db