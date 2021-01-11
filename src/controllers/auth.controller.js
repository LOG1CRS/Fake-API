import WebUser from '../models/WebUser';
import jwt from 'jsonwebtoken';

export const authTest = (req, res) => {
  res.status(200).json({ access: 'true' });
};

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res
      .status(400)
      .json({ error: 'Data required: email, username, and password' });
    return;
  }

  const userFound = await WebUser.findOne({ email });

  if (userFound) {
    res.status(400).json({ error: 'Email already exist' });
    return;
  }

  const newWebUser = new WebUser({
    username,
    email,
    password: await WebUser.encryptPassword(password),
    role: 'collaborator',
  });

  const userSaved = await newWebUser.save();

  const token = jwt.sign({ id: userSaved._id }, process.env.SECRET, {});

  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Data required: email, and password' });
    return;
  }

  const userFound = await WebUser.findOne({ email });

  if (!userFound) {
    res.status(400).json({ error: 'Email not found' });
    return;
  }

  const matchPassword = await WebUser.comparePassword(
    password,
    userFound.password
  );

  if (!matchPassword) {
    res.status(401).json({ error: 'Passwords do not match' });
    return;
  }

  const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {});

  res.status(200).json({ token });
};
