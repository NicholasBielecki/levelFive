const express = require('express')
const app = express()

app.use(express.json())

app.use("/todo", require("./routes/todo.js"))


app.listen(5000, () => console.log("The server is running on port 5000"))