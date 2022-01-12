const express = require('express');
const transactionRouter = express.Router();

// get
transactionRouter.get("/:fireID")


module.exports = {
    transactionRouter
}