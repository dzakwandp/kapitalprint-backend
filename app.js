const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./app/models/')
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true
    })
    .then(()=>{
        console.log ('Database connected')
    })
    .catch((err)=>{
        console.log('failed to connect')
        process.exit()
    })

app.get('/', (req, res) =>{
    res.json({
        message: "hello world!"
    })
})

require('./app/routes/itemRoutes')(app)
require('./app/routes/blogRoutes')(app)
require('./app/routes/adminRoutes')(app)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})