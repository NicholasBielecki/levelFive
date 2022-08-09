const express = require('express')
const app = express()


app.use(express.json())

app.use("/bounties", require('./routes/bounties.js'))


app.listen(5000, ()=>{
    console.log('The app is running on port 5000')
})

