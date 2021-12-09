const express = require('express');
const { getAllChildren, getChildById, createChild, updateChild, deleteChild } = require('../Controllers/child.controller');
const childRouter = express.Router();
parentRouter.use(express.json());

// get all children (mostly useful for testing and admin work)
childRouter.get("/", getAllChildren);

// creates new child
childRouter.post("/", createChild)

// get child by id
childRouter.get("/:id", getChildById)
// update child info
childRouter.put("/:id", updateChild);
// delete child (will be gone forever)
childRouter.delete("/:id", deleteChild);


module.exports = {
    childRouter
}