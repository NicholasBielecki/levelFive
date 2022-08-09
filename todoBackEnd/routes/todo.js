const express = require('express')
const { setEncoding } = require('readline-sync')
const app = express()
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')

let myArray = [
    {
        name : "NameOne",
        description : "description",
        imageUrl : "image url",
        completed : false,
        _id : "One"
    },
    {
        name : "NameTwo",
        description : "description",
        imageUrl : "image url",
        completed : false,
        _id : "Two"
    }
]


todoRouter.get("", (req, res) => {
    res.send(myArray)
})

todoRouter.get("/:getId", (req, res) =>{
    const filterFunc = myArray.filter(index =>{
        return(
            index._id === req.params.getId
        )
    })
    res.send(filterFunc)
})

todoRouter.post("", (req, res) => {
    const newPost = req.body
    newPost._id = uuidv4()
    myArray.push(newPost)
    res.send(myArray)
})


todoRouter.delete("/:deleteId", (req, res) =>{
    const deletedItem = req.params.deleteId
    const filterFunc = myArray.map(index =>{
        if (index._id === req.params.deleteId){
            myArray.splice(index, 1)
        }
    })
    
    res.send(myArray)
})


todoRouter.put("/:putId", (req, res) =>{
    const id = req.params.putId
    const findIndex = myArray.findIndex(index => index._id === id)
    const updatedObject = Object.assign(myArray[findIndex], req.body)

    res.send(updatedObject)
})


module.exports = todoRouter