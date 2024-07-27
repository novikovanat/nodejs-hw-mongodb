import Joi from 'joi';
import {
  CONTACTS_TYPE,
  DEFAULT_CONTACTS_TYPE,
  phoneNumberRegex,
} from '../constants/contactConstants.js';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().pattern(phoneNumberRegex).message('Here are some example phone numbers : 12345, +123456789012345, +9876543210, 234567, +2345678901234').required(),
  email: Joi.string().email().allow(null).default(null),
  contactType: Joi.string()
    .valid(...CONTACTS_TYPE)
    .default(DEFAULT_CONTACTS_TYPE),
  isFavourite: Joi.boolean().default(false),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  phoneNumber: Joi.string().pattern(phoneNumberRegex),
  email: Joi.string().email().allow(null).default(null),
  contactType: Joi.string()
    .valid(...CONTACTS_TYPE)
    .default(DEFAULT_CONTACTS_TYPE),
  isFavourite: Joi.boolean().default(false),
});
