const express = require('express');
const { getAllChildren, getChildById, createChild, updateChild, deleteChild, getChildByFireId } = require('../Controllers/child.controller');
const { startTransaction, getStartedTransactionByChild, getTransactionById } = require('../Controllers/transaction.controller');
const childRouter = express.Router();
childRouter.use(express.json());

// get all children (mostly useful for testing and admin work)
childRouter.get("/", getAllChildren);

// creates new child
childRouter.post("/", createChild)

// get child by id
childRouter.get("/:id", getChildById)
// get child by fire id
childRouter.get("/fire/:fireID", getChildByFireId)

// update child info
childRouter.put("/:id", updateChild);
// delete child (will be gone forever)
childRouter.delete("/:id", deleteChild);

// get all started transaction 


// start a new transaction using
childRouter.post('/transaction/:fireID', startTransaction);

// get started transactions by fireID
childRouter.get('/transaction/byChild/:fireID', getStartedTransactionByChild);

// get a specific transaction, started by child
childRouter.get('/transaction/:transactionId', getTransactionById)


module.exports = {
    childRouter
}