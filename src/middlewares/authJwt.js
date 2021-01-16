import jwt from 'jsonwebtoken';
import WebUser from '../models/WebUser';

const tokenValidation = async (req, res) => {
  const { authorization } = req.headers;
  let token = '';

  if (!authorization) {
    res.status(407).json({
      error: 'Proxy Authentication Required ',
      message: 'Authorization header missing',
    });
    return -1;
  }

  const bearerToken = authorization.split(' ');
  token = bearerToken[1];

  if (!token) {
    res.status(403).json({ error: 'Forbidden', message: 'No token provider' });
    return -1;
  }

  let decoded = '';

  try {
    decoded = jwt.verify(token, process.env.SECRET);
  } catch (err) {
    const { message } = err;
    res
      .status(401)
      .json({ error: 'Unauthorized', message: 'Token invalid', message });
    return -1;
  }

  req.userId = decoded.id;
  const user = await WebUser.findById(req.userId);

  if (!user) {
    res.status(401).json({ error: 'Unauthorized', message: 'No user found' });
    return -1;
  }

  return 0;
};

export const verifyToken = async (req, res, next) => {
  if (tokenValidation(req, res) === -1) {
    return;
  }
  next();
};

export const validateToken = async (req, res) => {
  if ((await tokenValidation(req, res)) === -1) {
    return;
  }
  res.json({ message: 'User validated' });
};
