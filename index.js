const { router } = require("./Routers/root.router");

const express = require("express"),
    joi = require("joi"),
    mongoose = require("mongoose"),
    app = express(),
    PORT = (process.env.port || 4000),
    conf = {
        mongo: "mongodb://localhost:27017/smk" // need dev url vs real url
    }

app.use(express.static("public"));
app.use(express.json());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', '*');
    res.append('Access-Control-Allow-Methods', '*');
})

app.models = {
    Parent: require("./models/Parent"),
    Kid: require("./models/Kid")
}

/* PLANNING:
/api
    /users
        /parent
            /register (POST)
            /login  (POST)
            / (GET) <- get all parents
            /:id (GET) <- get parent by id
            /:id (PUT) <- update parent info
            /:id (DELETE) <- delete parent
        /kid
            /register (POST)
            /login  (POST)
            / (GET) <- get all children
            /:id (GET) <- get child by id
            /:id (PUT) <- update child info
            /:id (DELETE) <- delete child

    /transactions
        - /parent/:id (GET) <- get all transactions using parent's ID
        - /child/:id (GET) <- get all transactions using child's ID
        - /start (start a transaction for parent approval) (POST)
        - /:id (GET) <- get transaction details by id
        - /:id (PUT) <- update transaction info (might be useful later on)
        - /:id (DELETE) <- delete transaction (might be useful later on)
        - /approve/:id (approve transaction, update to approved) (PUT)
        - /deny/:id (decline transaction, delete request) (PUT) 
    
    Needed middlewares:
        check id exist
        authenticate (if user is logged in)
        authorize (if user have permission for this command)
        transactionPerms (check if transaction belongs to the parent's kid)

*/
// IMPORTANT: NEED FIREID

app.use("/api", router);
app.listen(PORT, async () => {
    await mongoose.connect(conf.mongo);
    console.log(`Connected with mongoDB: ${conf.mongo}`);
    console.log(`Server starting @ PORT ${PORT}`);
})