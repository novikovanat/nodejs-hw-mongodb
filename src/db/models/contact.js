import { model, Schema } from 'mongoose';
import { CONTACTS_TYPE, emailRegex } from '../../constants/contactConstants.js';


function validator(email) {
  return emailRegex.test(email);
}

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String || null,
      validate: validator,
      required: false,
    },
    contactType: {
      type: String,
      required: true,
      enum: CONTACTS_TYPE,
      default: 'personal',
    },
    isFavourite: {
      type: Boolean,
      required: true,
      default: false,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true, },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const ContactsCollection = model('contacts', contactsSchema);
