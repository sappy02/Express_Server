const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Hi Im the veggies")
})

module.exports = router; //export the router