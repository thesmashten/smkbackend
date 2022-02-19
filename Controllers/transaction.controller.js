const Child = require('../models/Kid');


const startTransaction = async (req, res) => {

    try {
        const { fireID } = req.params;
        const { message, category, value } = req.body;
        const kid = await Kid.findOne({ fireID });

        const newTransaction = {
            status: false,
            message,
            category,
            timestamp: new Date(),
            value
        }

        kid.transactions.push(newTransaction);
        kid.save()
        res.status(201).send({ message: 'transaction started', data: newTransaction })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

const getStartedTransactionByChild = async (req, res) => {
    try {
        const { fireID } = req.params;
        const kid = await Kid.findOne({ fireID }, 'username transactions');
        console.log(kid)
        res.status(200).send({ data: kid })
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

const getTransactionById = async (req, res) => {
    try {
        const { transactionId } = req.params;

        const kid = await Kid.findOne({ 'transactions._id': transactionId });
        res.status(200).send({ username: kid.username, data: kid.transactions.id(transactionId) })
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

const approveTransaction = async (req, res) => {
    try {
        const { id } = req.params;

        const kid = await Kid.findOne({ 'transactions._id': id });
        const transaction = kid.transactions.find((trans) => {

            return trans._id.toString() == id;
        });
        if (transaction.status) {
            res.status(400).send("transaction already approved");
        } else {
            switch (transaction.category) {
                case 'SAVE': {
                    kid.saveBank += transaction.value;
                    break;
                }
                case 'SPEND': {
                    kid.spendBank += transaction.value;
                    break;
                }
                case 'SHARE': {
                    kid.shareBank += transaction.value;
                    break;
                }
            }
            transaction.status = true;
            kid.save();
            res.status(200).send(transaction);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

module.exports = {
    startTransaction,
    getStartedTransactionByChild,
    getTransactionById,
    approveTransaction
}