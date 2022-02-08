const express = require('express');
const { transactionRouter } = require('./transaction.router');
const { userRouter } = require('./users.router');

const router = express.Router();

router.use("/users", userRouter);
router.use("/transaction", transactionRouter)

module.exports = {
    router
}