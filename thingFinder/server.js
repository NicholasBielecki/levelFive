const express = require('express')
const app = express()

app.get("", (req, res) =>{
res.send(inventoryItems)
})

app.get("/search/type", (req, res) =>{
    const thisSearch = req.query.type
    const newInventoryItems = inventoryItems.filter(index =>index.type === thisSearch)
    res.send(newInventoryItems)
})


app.listen(5000, () =>{
    console.log("The server is running on port 5000")
})


const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]
