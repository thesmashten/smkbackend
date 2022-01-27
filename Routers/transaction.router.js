const express = require('express');
const { approveTransaction } = require('../Controllers/transaction.controller');
const transactionRouter = express.Router();

// get
transactionRouter.get("/:fireID")

transactionRouter.post("/approve/:id", approveTransaction)


module.exports = {
    transactionRouter
}