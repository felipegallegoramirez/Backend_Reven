const Event = require("../models/event");
const EventCtrl = {};

EventCtrl.getEvents = async (req, res, next) => {
    try{
        const save = await Event.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

EventCtrl.getEvent = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Event.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

EventCtrl.SearchEvent = async (req, res, next) => {
    try{
        const save = await Event.find()
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}


EventCtrl.createEvent = async (req, res, next) => {
    try{
        const { 
            name,
            description,
            users} = req.body;

            const img_url = req.file.filename;

            // ! Falta buscar los usuarios y agregarlos a users
            // ?  en users es un arreglo de los emails

        const body = { name,
            email,
            description,
            users,
            img_url };
        var save= await Event.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};


EventCtrl.SendInvitations = async (req, res, next) => {
    try{

    }catch(err){
        res.status(400).send(err)
    }
}




EventCtrl.editEvent = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Event.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

EventCtrl.putPhoto = async (req, res, next) => {
    try{
        const image = req.file.filename;
        const { id } = req.params;
        const event = await Event.findById(id);

        await deleteImage(event.img_url);

        event.img_url = image;
        let save = await Reward.findByIdAndUpdate(id, event);

        res.status(200).send(save);
    }catch(err){
        res.status(400).send(err);
    }
}


EventCtrl.deleteEvent = async (req, res, next) => {
    try{
        await Event.findByIdAndRemove(req.params.id);
        res.json({ status: "Event Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = EventCtrl;