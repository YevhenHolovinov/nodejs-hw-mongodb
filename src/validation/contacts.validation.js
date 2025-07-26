import Joi from 'joi';

export const contactsSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.number().required(),
  email: Joi.string().min(3).max(20).required(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('home', 'personal', 'work').required(),
});

export const updateContactsSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.number(),
  email: Joi.string().min(3).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('home', 'personal', 'work'),
});
