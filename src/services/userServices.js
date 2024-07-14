import { usersCollection } from '../db/models/user.js';

export const registerUser = async (payload) => {
  return await usersCollection.create(payload);
};
