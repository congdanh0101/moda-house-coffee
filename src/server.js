const express = require('express')
const hbs = require('express-handlebars')
// require('dotenv').config()
const db = require('./config/database')
const morgan = require('morgan')
const route = require('./route/index.route')

const server = process.env.PORT || 3000
db.connectDB();


const app = express()
// app.use(morgan('combined'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

route(app)

app.listen(server,()=>console.log(`Server is running at http://localhost:${server}`))