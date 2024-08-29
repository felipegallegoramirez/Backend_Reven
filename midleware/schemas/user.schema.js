const Joi = require('joi');

const id = Joi.string();
const name = Joi.string();
const email = Joi.string().email();
const password = Joi.string();
const rol = Joi.string();
const files_id = Joi.array().items(Joi.string());
const post_id = Joi.array().items(Joi.string());
const bloq = Joi.array().items(Joi.number().integer().min(0).max(9999999999));
const services = Joi.array().items(Joi.string());
const booking = Joi.array().items(Joi.string());
const code = Joi.string();
const active = Joi.boolean();
const description = Joi.string();
const category = Joi.string();
const locate = Joi.string();
const link = Joi.string();
const followers = Joi.array().items(Joi.string());
const follows = Joi.array().items(Joi.string());


const createUserSchema = Joi.object({
  email: email.required(),
  name: name.required(),
  password: password.required(),
});

const loginUserSchema  = Joi.object({
  email: email.required(),
  password: password.required(),
});

const getUserSchema = Joi.object({
  email: email.required(),
  name: name.required(),
  password: password.required(),
  rol: rol.required(),
  files_id: files_id.required(),
  post_id: post_id.required(),
  bloq: bloq.required(),
  services: services.required(),
  booking: booking.required(),
  code: code.required(),
  active: active.required(),
  description: description.required(),
  category: category,
  locate: locate.required(),
  link: link.required(),
  followers: followers.required(),
  follows: follows.required()
})

const updateUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  description: description.required(),
  category: category,
  locate: locate.required(),
  link: link.required(),
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema, loginUserSchema}
