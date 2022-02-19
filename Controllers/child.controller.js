const Child = require("../Models/Kid");

const createChild = async (req, res) => {
    let input = req.body;

    const newChild = new Child({
        ...input,
    });

    try {
        const child = await newChild.save();
        res.status(200).send(child);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getAllChildren = async (req, res) => {
    try {
        const childArr = await Child.find()
        res.status(200).send(childArr);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getChildById = async (req, res) => {
    const { id } = req.params;
    try {
        const child = await Child.findById(id);
        if (child){
            res.status(200).send(child);
        } else {
            res.staus(404).send("child not found");
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const getChildByFireId = async(req, res) =>{
    const {fireID} = req.params;
    try {
        const child = await Child.findOne({fireID});
        if (child){
            res.status(200).send(child);
        } else {
            res.staus(404).send("child not found");
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

const updateChild = async(req, res) =>{
    const {id} = req.params;
    const input = req.body;
    try {
        const updatedChild = await Child.findByIdAndUpdate(id, {...input}).exec();
        res.status(200).send({message: "update sucessful", updatedChild})
    } catch (err) {
        res.status(500).send(err)
    }
}

const deleteChild = async(req, res) =>{
    const {id} = req.params;
    const byId = {_id: id};
    try {
        const deletedChild = await Child.findOne(byId);
        await Child.deleteOne(byId);
        res.status(200).send({message: "delete sucessful", deletedChild})

    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    createChild,
    getChildById,
    getAllChildren,
    updateChild,
    deleteChild,
    getChildByFireId
}