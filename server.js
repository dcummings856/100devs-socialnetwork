const express = require('express')
const app = express()
// const mongoose = require('mongoose')
// const passport = require('passport')
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const connectDB = require('./config/database')
const homeRoute = require('./routes/home')
const feedRoute = require('./routes/feed')
const PORT = 8000
// require('dotenv').config({path: './config/.env'})

// Passport config
// require('./config/passport')(passport)

// connectDB()

// app.set('view engine', 'ejs')
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// // Sessions
// app.use(
//   session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// )

// // Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())


app.use('/', homeRoute)
app.use('/feed', feedRoute)
app.use('/todos', todoRoutes)

app.listen(process.env.PORT || PORT, ()=>{
  console.log('Server is running, you better catch it!')
})   