const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const userRoutes = require("./routes/users");
const cors = require('cors');
const app = express();

// env files
const uri = process.env.DATABASE_URL;
const PORT = process.env.PORT;

// database configuration
async function connnection(){
    try {
        let connected = await mongoose.connect(`${uri}`)
        console.log("Database Connected ----------->>>>")
        return connected;

    } catch (error) {
        console.log("erorr in connecting Databse ------->>>>>>>", error)
    }
}

// app configurations middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
connnection()

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