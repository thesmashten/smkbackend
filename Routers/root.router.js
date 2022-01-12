const express = require('express');
const { userRouter } = require('./users.router');

const router = express.Router();

router.use("/users", userRouter);


module.exports = {
    router
}