const Reward = require("../models/reward");
const RewardCtrl = {};

RewardCtrl.getRewards = async (req, res, next) => {
    try{
        const save = await Reward.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

RewardCtrl.getReward = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Reward.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

RewardCtrl.SearchReward = async (req, res, next) => {
    try{
        const save = await Reward.find()
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}


RewardCtrl.createReward = async (req, res, next) => {
    try{
        const { name,
            description,
            count,
            price,} = req.body;

            const img_url = req.file.filename;

        const body = {
            name,
            description,
            count,
            price,
            img_url,
            users: []
        };

        var save= await Reward.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};


RewardCtrl.putPhoto = async (req, res, next) => {
    try{
        const image = req.file.filename;
        const { id } = req.params;
        const reward = await Reward.findById(id);

        await deleteImage(reward.img_url);

        reward.img_url = image;
        let save = await Reward.findByIdAndUpdate(id, reward);

        res.status(200).send(save);
    }catch(err){
        res.status(400).send(err);
    }
}


RewardCtrl.editReward = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Reward.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

RewardCtrl.deleteReward = async (req, res, next) => {
    try{
        var reward = await Reward.findById(req.params.id);
        if(reward.img_url != ''){
            await deleteImage(reward.img_url)
        }
        await Reward.findByIdAndRemove(req.params.id);
        res.json({ status: "Reward Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = RewardCtrl;