import jwt from 'jsonwebtoken';
import WebUser from '../models/WebUser';

export const verifyToken = async (req, res, next) => {
  let decoded = '';
  const token = req.headers['token'];

  console.log(token);

  if (!token) {
    res.status(403).json({ error: 'No token provider' });
    return;
  }
  try {
    decoded = jwt.verify(token, process.env.SECRET);
  } catch (err) {
    res.status(400).json({ error: 'Token invalid' });
    return;
  }

  const user = await WebUser.findById(decoded.id);

  if (!user) {
    res.status(404).json({ error: 'No user found' });
    return;
  }

  next();
};
