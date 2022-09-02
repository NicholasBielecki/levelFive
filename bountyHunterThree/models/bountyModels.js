const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
firstName : String
// lastName : String,
// isAlive : Boolean,
// bountyAmount : Number,
// type : String
})


module.exports = mongoose.model('MyBountySchema', bountySchema)


// let testArray = [{_id : uuidv4(), firstName : "testOne", lastName : "lastName", isAlive : true, bountyAmount : 1, type : "jedi"}, {_id : uuidv4(), firstName : "test two", lastName : "lastName", isAlive : false, bountyAmount : 2, type : "Sith"}]
