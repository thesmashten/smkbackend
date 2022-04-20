const mongoose = require("mongoose"),
    Schema = mongoose.Schema;
//can move this into Kid.js?
let Tracker = new Schema({
    goalCount: { type: Number, default: 0 },
    threeGoalsReached: { type: Boolean, default: false },
    firstDeposit: { type: Boolean, default: false },
    allBanksUsed: { type: Boolean, default: false },
    hundoBadge: { type: Boolean, default: false },
    badges: { type: [String], default: [] },
    fireId: { type: String, required: true, index: { unique: true } },
})
// check badge method
// checkThreeGoals()
// checkFirstDeposit()...
//
module.exports = mongoose.model("Tracker", Parent);