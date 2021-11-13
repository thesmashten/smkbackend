const mongoose = require("mongoose"),
    Schema = mongoose.Schema;


let Transaction = new Schema({
    status: {type: Boolean, default: false},
    message: {type: String, required: true},
    category: {type: String, required: true},
    timestamp: {type: Date, required: true},
    value: {type: Number, required: true, default: 0}
})

module.exports = Transaction;