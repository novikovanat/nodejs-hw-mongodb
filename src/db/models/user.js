import { model, Schema } from 'mongoose';
import { emailRegex, ROLES } from '../../constants/studentConstants.js';

function validator(email) {
  return emailRegex.test(email);
}

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, validate: validator, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ROLES, default: ROLES.PARENT },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

usersSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UsersCollection = model('users', usersSchema);
