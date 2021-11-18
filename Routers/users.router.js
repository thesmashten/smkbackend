const express = require('express');
const { childRouter } = require('./child.router');
const { parentRouter } = require('./parent.router');
const userRouter = express.Router();

userRouter.use("/parent", parentRouter)
userRouter.use("/child", childRouter)


// any API requiring /users should be here


module.exports = {
    userRouter
}