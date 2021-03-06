const Parent = require("../models/Parent");
const Child = require('../models/Kid')



const createParent = async (req, res) => {
    let input = req.body

    // fireId: "STRING"
    const newParent = new Parent({
        ...input,
    })

    try {
        const parent = await newParent.save()
        res.status(200).send(parent);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getAllParents = async (req, res) => {
    try {
        const parentArr = await Parent.find()
        res.status(200).send(parentArr);
    } catch (error) {
        res.status(500).send(error)
    }
}

const getParentById = async (req, res) => {
    const { id } = req.params;
    try {
        const parent = await Parent.findById(id);
        if (parent) {
            res.status(200).send(parent);
        } else {
            res.staus(404).send("parent not found");
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

const getParentByFireId = async (req, res) => {
    const { fireID } = req.params;
    try {
        const parent = await Parent.find({ fireID });
        if (parent) {
            res.status(200).send(parent);
        } else {
            res.staus(404).send("parent not found");
        }
    }
    catch (error) {
        res.status(500).send(error);
    }
}

const updateParent = async (req, res) => {
    const { id } = req.params;
    const input = req.body;
    try {
        const updatedParent = await Parent.findByIdAndUpdate(id, { ...input }).exec();
        res.status(200).send({ message: "update sucessful", updatedParent })
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteParent = async (req, res) => {
    const { id } = req.params;
    const byId = { _id: id };
    try {
        const deletedParent = await Parent.findOne(byId);
        await Parent.deleteOne(byId);
        res.status(200).send({ message: "delete sucessful", deletedParent })

    } catch (error) {
        res.status(500).send(error);
    }
}

const addChild = async (req, res) => {
    const { fireID } = req.params;
    const { childId } = req.body;
    try {
        const starterParent = await Parent.findOne({ fireID });
        const child = await Child.findOne({ linkcode: childId });
        if (child) {
            if (!starterParent.kids.includes(child.fireId)) {
                starterParent.kids.push(child.fireID);
            } else {
                res.status(400).send("Child already added");
            }
        } else {
            res.status(404).send("no child found with matching child ID")
        }
        starterParent.save();
        res.status(200).send({ message: "child appended", starterParent });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}


module.exports = {
    createParent,
    getParentById,
    getAllParents,
    updateParent,
    deleteParent,
    getParentByFireId,
    addChild
}