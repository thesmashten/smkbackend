const Kid  = require('../Models/Kid');


const startTransaction = async (req, res) => {

    try {
        const {id} = req.params;
        const { message, category, value } = req.body;
        const kid = await Kid.findById(id);

        const newTransaction = {
            status: false,
            message,
            category,
            timestamp: new Date(),
            value
        }
        
        kid.transactions.push(newTransaction);
        kid.save()
        res.status(200).send({message: 'transaction started', data:newTransaction})
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}



module.exports = {
    startTransaction
}