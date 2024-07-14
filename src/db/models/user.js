import { model, Schema } from 'mongoose';
import { emailRegex } from '../../constants/studentConstants.js';

function validator(email) {
  return emailRegex.test(email);
}

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, validate: validator, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const usersCollection = model('users', usersSchema);

