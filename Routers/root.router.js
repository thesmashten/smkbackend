const express = require('express');
const { parentRouter } = require('./parent.router');
const { childRouter } = require('./child.router');

const router = express.Router();

router.use("/parents", parentRouter);
router.use("/children", childRouter);

module.exports = {
    router
}