const Joi = require('joi');

const id = Joi.string();
const title = Joi.string();
const images = Joi.array().items(Joi.string());
const creator_image = Joi.string();
const creator_id = Joi.string()
const creator_name = Joi.string();
const content = Joi.string();
const description = Joi.string();
const likes = Joi.array().items(Joi.string());
const comment = Joi.array().items(Joi.string());

const createPostSchema = Joi.object({
    creator_image: creator_image,
    creator_name: creator_name,
    content: content,
    title: title.required(),
    images: images.required(),
    description: description.required(),
    likes: likes,
    comment: comment
})

const getPostSchema = Joi.object({
    id: id.required(),
    creator_id: creator_id.required(),
})

module.exports = {createPostSchema, getPostSchema}