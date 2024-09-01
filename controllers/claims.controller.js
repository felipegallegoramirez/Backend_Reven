const Claims = require("../models/claims");
const User = require("../models/user");
const { messageRegister } = require("../utils/emailprefabs/registerEmail");
const Reward = require("../models/reward");
const user = require("../models/user");


const ClaimsCtrl = {};

ClaimsCtrl.getClaimss = async (req, res, next) => {
    try{
        const save = await Claims.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

ClaimsCtrl.getClaims = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Claims.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

ClaimsCtrl.SearchClaims = async (req, res, next) => {
    try{
        const save = await Claims.find()
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}


ClaimsCtrl.createClaims = async (req, res, next) => {
    try{
        const { name,
            description,
            reward,
            total,
            state,
            user_id} = req.body;
            
            let acum = 0

            for (const element of Reward) {
                let reward_data = await User.findById(element._id);
                if (reward_data){
                    if(reward_data.count>element.count ||
                       reward_data.price != element.price ||
                       reward_data.name != element.name
                    ){
                        res.status(400).send({mesage:'Error validacion'})
                    }else{
                        acum+=reward_data.price*reward_data.count
                    }
                }else{
                    res.status(400).send({mesage:'Error validacion'})
                }
            }

            if(acum!=total){
                res.status(400).send({mesage:'Error validacion'})
            }

            let user_data = await User.findById(user_id)
            if(user_data){
                if(user_data.points<acum){
                    res.status(400).send({mesage:'Error validacion'})
                }else{
                    user_data.points-=acum
                    await User.findByIdAndUpdate(user_id,user_data)
                }
            }else{
                res.status(400).send({mesage:'Error validacion'})
            }



        const body = { name,
            name,
            description,
            reward,
            total,
            state,
            user_id};
        var save= await Claims.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};



ClaimsCtrl.editClaims = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Claims.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

ClaimsCtrl.deleteClaims = async (req, res, next) => {
    try{
        await Claims.findByIdAndRemove(req.params.id);
        res.json({ status: "Claims Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};


ClaimsCtrl.claimReward = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Claims.findByIdAndUpdate(id, {state: 'Entregado'}, {new: true});
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};


module.exports = ClaimsCtrl;