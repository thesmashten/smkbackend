const express = require('express');
const { getAllParents, getParentById, createParent, updateParent, deleteParent, getParentByFireId, addChild } = require('../Controllers/parent.controller');
const parentRouter = express.Router();
parentRouter.use(express.json());


// get all parents (mostly useful for testing and admin work)
parentRouter.get("/", getAllParents);

// creates new parent
parentRouter.post("/", createParent)
// adds child to parent's child array
parentRouter.put("/addChild/:fireID", addChild);

// TODO: middle ware to check if collection contain parent with the passed in ID.
// get parent by id
parentRouter.get("/:id", getParentById)
// get parent by fireID
parentRouter.get("/fire/:fireID", getParentByFireId)

// update parent info
parentRouter.put("/:id", updateParent);
// delete parent (will be gone forever)   *Paranoid collections?*
parentRouter.delete("/:id", deleteParent);

module.exports = {
    parentRouter
}