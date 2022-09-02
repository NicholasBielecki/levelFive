const express = require("express")
const app = express()
const bountyRouter = express.Router()
const readlineSync = require('readline-sync')
const MyBountySchema = require('../models/bountyModels.js')
 
// let testArray = [{_id : uuidv4(), firstName : "testOne", lastName : "lastName", isAlive : true, bountyAmount : 1, type : "jedi"}, {_id : uuidv4(), firstName : "test two", lastName : "lastName", isAlive : false, bountyAmount : 2, type : "Sith"}]

bountyRouter.get("", (req,res, next) =>{
    MyBountySchema.find((err, searchedBounty) =>{
        if(err){
            res.status(500)
            return next (err)
        }
        console.log("worked")
        return res.status(200).send(searchedBounty)
    })
})

bountyRouter.post("", (req,res, next) =>{
const newBounty = new MyBountySchema(req.body)
newBounty.save((err, savedBounty) => {
    if(err){
        res.status(500)
        return next(err)
    }
res.send(newBounty)
})
})
 
bountyRouter.delete("/:bountyId", (req,res) =>{
    const bountyId = req.params.bountyId
    const deletedIndex = testArray.findIndex(bountyIndex => bountyIndex._id === bountyId)
    deleteBounty = testArray.splice(deletedIndex, 1)
    res.send(testArray)     
})

bountyRouter.put("/:bountyId", (req,res) =>{
    console.log(req.body)
    const bountyId = req.params.bountyId
    const editedIndex = testArray.findIndex(bountyIndex => bountyIndex._id === bountyId)
    editBounty = Object.assign(testArray[editedIndex], req.body)
    res.send(editBounty)
})

 



module.exports = bountyRouter