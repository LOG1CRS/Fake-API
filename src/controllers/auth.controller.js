import WebUser from '../models/WebUser';

export const signUp = async (req, res) => {
  const { email, password, role } = req.body;
  res.json({ auth: 'Sign Up' });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  res.json({ auth: 'Sign In' });
};
