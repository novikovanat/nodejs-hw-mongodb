import { registerUser } from '../services/userServices.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.JSON({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};
