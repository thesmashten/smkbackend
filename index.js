const express = require("express"),
    joi = require("joi"),
    mongoose = require("mongoose"),
    app = express(),
    PORT = (process.env.port || 4000),
    conf = {
        mongo: "fakeurlformongoose.com" // need dev url vs real url
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
        - /users
            - /register 
                - /parent (POST)
                - /child (POST) - modifies child object and parent object
            - /login (GET)
        - /transactions
            - /register (create transaction for parent approval) (POST)
            - /approve/:id (approve transaction, update to approved) (PUT)
            - /deny/:id (decline transaction, delete request) (PUT)
    */

    app.listen(PORT, async () => {
        await mongoose.connect(conf.mongo);
        console.log(`Connected with mongoDB: ${conf.mongo}`);
        console.log(`Server starting @ PORT ${PORT}`);
    })