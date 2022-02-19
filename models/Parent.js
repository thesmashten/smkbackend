const mongoose = require("mongoose"),
    Schema = mongoose.Schema;


let Parent = new Schema({
    username: {type: String, required: true, index: {unique: true}},
    fireID: {type: String, required: true, index: {unique: true}},
    kids: {type: Array}
})

module.exports = mongoose.model("Parent", Parent);