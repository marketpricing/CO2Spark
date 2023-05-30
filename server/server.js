const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const fs = require('fs');
const tf = require('@tensorflow/tfjs-node');
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

app.post('/predict', async (req, res) => {
    // Load model
    const modelPath = './model/model.json';
    const model = await tf.loadLayersModel(`file://${modelPath}`);
  
    // Predict using model
    const data = req.body.data;
    const input = tf.tensor(data);
    const output = model.predict(input);
  
    // Send response
    res.send(output);
  });
  
// Dev Logginf Middleware


app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(morgan('dev'))



// Use Routes
app.use('/api', authRouter)
app.use('/api', appRouter)
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