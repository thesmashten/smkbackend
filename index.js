const { router } = require("./Routers/root.router");

const express = require("express"),
    joi = require("joi"),
    mongoose = require("mongoose"),
    app = express(),
    PORT = (process.env.port || 3000),
    conf = {
        mongo: "mongodb+srv://changeplusplus:QmkqG8EwIKnfIGBL@supermoneykids.h98fu.mongodb.net/smk?retryWrites=true&w=majority" // need dev url vs real url
    }

app.use(express.static("public"));
app.use(express.json());


// app.models = {
//     Parent: require("./models/Parent"),
//     Kid: require("./models/Kid")
// }

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
            /addkid/:id (post) <-link kid with parent using code
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

app.use("/api", router);
app.listen(PORT, async () => {
    await mongoose.connect(conf.mongo);
    console.log(`Connected with mongoDB: ${conf.mongo}`);
    console.log(`Server starting @ PORT ${PORT}`);
})