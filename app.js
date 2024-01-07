const express = require("express")
const app = express()
const dotenv = require("dotenv").config();
const uri = process.env.DATABASE_URL;
const PORT = process.env.PORT;

// DATABASE
const mongoose = require("mongoose")

console.log("uriiiiii---->>>>>>>>>>>>>>>>>>>", uri)
console.log("PORT---->>>>>>>>>>>>>>>>>>>", PORT)

app.listen(PORT, () => {
    console.log(`connection connected running at ${PORT}`)
})