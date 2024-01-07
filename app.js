const express = require("express")
const app = express()
const dotenv = require("dotenv").config();
const uri = process.env.DATABASE_URL;
const PORT = process.env.PORT;

// DATABASE
const mongoose = require("mongoose")

const connnection = async() => {
    try {
        let connected = await mongoose.connect(`${uri}`)
        console.log("Database Connected ----------->>>>")
        return connected;

    } catch (error) {
        console.log("erorr in connecting Databse ------->>>>>>>", error)
    }
}
connnection()


app.listen(3000, () => {
    try {
        console.log(`Server running at port ${PORT}`)
    } catch (error) {
        console.log(`server error :  ${error}`)
        
    }
})