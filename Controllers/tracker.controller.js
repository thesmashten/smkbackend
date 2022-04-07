const Kid = require("../models/Kid");
const Tracker = require("../models/Tracker")

const createTracker = async(fireId) =>{
    const newTracker = new Tracker({
        fireId
    })
    try{
        const newTracker = await newTracker.save();
        return newTracker;
    }
    catch(err){
        return null;
    }
}

const generateBadges = async(req, res) =>{
    let {fireId} = req.params;
    try {
        let newBadges = []
        let kid = await Kid.findOne({fireId});
        let tracker = await Tracker.findOne({fireId});
    
        // every if is a badge
        if (checkHundo(kid)){
            badges.push('hundo_badge');
        }
    
        tracker.badges = newBadges;
        tracker.save();
        res.status(201).send(badges);
    } catch (error) {
        res.status(500).send(error);
    }
 
    
}

// follow this method
const checkHundo = (kid) =>{
    return (kid.saveBank + kid.spendBank + kid.shareBank) >= 100;
}

 
module.exports = {
    createTracker,
    generateBadges
}