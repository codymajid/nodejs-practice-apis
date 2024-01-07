const express = require("express")
const router = express.Router()


router.get("/all-users", (req,res) => {
    res.send("hey users all")
})



module.exports = router;