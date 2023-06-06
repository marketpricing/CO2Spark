const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const fs = require('fs');
const cors = require('cors')
// Config dotev
require('dotenv').config({
    path: './config/config.env'
})


const app = express()

// Connect to database
connectDB();

// body parser
app.use(bodyParser.json())
// Load routes
const authRouter = require('./routes/auth.route')
const appRouter = require('./routes/user.route')
const applicationRouter = require('./routes/application.route')

// Dev Logginf Middleware


app.use(cors())
app.use(morgan('dev'))



// Use Routes
app.use('/api', authRouter)

app.use('/api/app', applicationRouter)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

