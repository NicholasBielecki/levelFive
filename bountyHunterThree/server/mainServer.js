const express = require("express")
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

app.use("/bounty", require("./bountyRoutes"))

app.use((err, req, res, next) =>{
    console.log(err)
    return res.send({errMsg : err.message})
})


mongoose.connect('mongodb://localhost:27017/bountydb', () => console.log("mongodb is running on port 27017"))

app.listen(5000, () =>  console.log("The server is running on port 5000"))  

