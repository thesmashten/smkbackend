const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    Transaction = require("./Transaction"),
    Goal = require("./Goal")


let Kid = new Schema({
    username: {type: String, required: true, index: {unique: true}},
    fireID: {type: String, required: true, index: {unique: true}},
    code: {type: String, required: true, index: {unique: true}},
    saveBank: {type: Number, default: 0},
    spendBank: {type: Number, default: 0},
    shareBank: {type: Number, default: 0},
    transactions: {type: [Transaction]},
    goals: {type: [Goal]},
})

module.exports = mongoose.model("Kid", Kid);