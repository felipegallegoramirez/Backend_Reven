const Response = require("../models/response");
const ResponseCtrl = {};

ResponseCtrl.getResponses = async (req, res, next) => {
    try{
        const save = await Response.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

ResponseCtrl.getResponse = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Response.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

ResponseCtrl.SearchResponse = async (req, res, next) => {
    try{
        const save = await Response.find()
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}


ResponseCtrl.createResponse = async (req, res, next) => {
    try{
        const { 
            answers,
            calification,
            points,
            state,
            user_id,
            survey_id,
            events_id } = req.body;

        const body = {            
            answers,
            calification,
            points,
            state,
            user_id,
            survey_id,
            events_id};
        var save= await Response.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};



ResponseCtrl.editResponse = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Response.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

ResponseCtrl.deleteResponse = async (req, res, next) => {
    try{
        await Response.findByIdAndRemove(req.params.id);
        res.json({ status: "Response Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = ResponseCtrl;