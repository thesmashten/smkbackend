const mongoose = require("mongoose"),
    Schema = mongoose.Schema;


let Goal = new Schema({
    status: {type: Boolean, default: false},
    message: {type: String, required: true},
})

module.exports = Goal;