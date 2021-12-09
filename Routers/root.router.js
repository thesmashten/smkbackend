const express = require('express');
const { testing } = require('../Controllers/transaction.controller');
const { userRouter } = require('./users.router');

const router = express.Router();

router.use("/users", userRouter)

module.exports = {
    router
}