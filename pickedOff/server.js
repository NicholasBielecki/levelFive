const express = require('express')
const app = express()


app.use("", require("./middleware.js"))

app.get("" , (req,res) =>{
   res.send(req.body)
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})
