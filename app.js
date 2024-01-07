const express = require("express")
const app = express()
const dotenv = require("dotenv").config();
const uri = process.env.DATABASE_URL;
const PORT = process.env.PORT;

// DATABASE
const mongoose = require("mongoose")

app.listen(PORT, () => {
    console.log(`New app listening on port ${PORT}`)
})