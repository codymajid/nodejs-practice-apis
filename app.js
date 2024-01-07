const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const userRoutes = require("./routes/users");
const cors = require('cors');
const connectDb = require("./config/dbConnection");
const app = express();

// env files
const uri = process.env.DATABASE_URL;
const PORT = process.env.PORT;

// app configurations middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
connectDb()

// routes
app.use('/users', userRoutes)

// server config
app.listen(3000, () => {
    try {
        console.log(`Server running at port ${PORT}`)
    } catch (error) {
        console.log(`server error :  ${error}`)
        
    }
})