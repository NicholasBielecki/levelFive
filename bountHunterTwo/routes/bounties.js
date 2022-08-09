const express = require("express")
const app = express()
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

app.use(express.json())



let bounties = [
    {
        firstName: "Luke",
        lastName : "SkyWalker",
        isAlive : true,
        bounty : "$500",
        type : "Jedi",
        _id : uuidv4()
    },

    {
        firstName: "Darth",
        lastName : "Vader",
        isAlive : true,
        bounty : "$1500",
        type : "Sith",
        _id : uuidv4()
    },

    {
        firstName: "Count",
        lastName : "Duku",
        isAlive : true,
        bounty : "$100",
        type : "Sith",
        _id : uuidv4()
    }
]



bountyRouter.get( "", (req, res) =>{
    res.send(bounties)
})

bountyRouter.post("", (req,res) =>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`Sucessfully pushed`)
})

bountyRouter.put("/:bountyId", (req, res) => {
    // const newId = req.params.bountyId
    // const updatedIndex = bounties.findIndex(index => index._id === newId)
    // const updatedBounty = Object.assign(bounties[updatedIndex], req.body)
   
    
    res.send("worked")
})

bountyRouter.delete("/:bountyId", (req,res) =>{
    const deltedBounty = req.params.bountyId
    const deletedIndex = bounties.filter(bounty => {
        if(deltedBounty === bounty._id){
            bounties.splice(bounty,1)
        }
        return(bounties)
    })

    res.send(deletedIndex)
})


module.exports = bountyRouter

