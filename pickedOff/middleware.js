const express = require('express')
const app = express()
const requestRouter = express.Router()

requestRouter.get("", (req,res,next) =>{
    return(
        req.body = { testObject : "test"},
        next()
    )
})                                           



module.exports = requestRouter