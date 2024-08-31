const Claims = require("../models/claims");
const { messageRegister } = require("../utils/emailprefabs/registerEmail");


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
            state} = req.body;

            // ! Falta comprobar los regalos
            // ?  en reward se envia segun la estructura aqui se hace segunda comprobacion

        const body = { name,
            name,
            description,
            reward,
            total,
            state};
        await messageRegister(email, name)
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



module.exports = ClaimsCtrl;