const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    Transaction = require("./Transaction"),
    Goal = require("./Goal")

let Kid = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    fireID: { type: String, required: true, index: { unique: true } },
    // name and birth date.
    saveBank: { type: Number, default: 0 },
    spendBank: { type: Number, default: 0 },
    shareBank: { type: Number, default: 0 },
    transactions: { type: [Transaction], default: [] },
    goals: { type: [Goal] },
    activated: { type: Boolean, default: false},
    linkcode: { type: String, required: true }
})

module.exports = mongoose.models.Kid || mongoose.model("Kid", Kid);
