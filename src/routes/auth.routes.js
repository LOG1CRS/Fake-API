import { Router } from 'express';
import { signUp, signIn, authTest } from '../controllers/auth.controller';
import { verifyToken } from '../middlewares/authJwt';
import jwt from 'jsonwebtoken';
import WebUser from '../models/WebUser';

const router = Router();

router.get('/', verifyToken, authTest);

router.post('/sign-up', signUp);

router.post('/sign-in', signIn);

router.post('/validate-token', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    res.status(403).json({ error: 'No token provider' });
    return;
  }
  let decoded = '';
  try {
    decoded = jwt.verify(token, process.env.SECRET);
  } catch (err) {
    const { message } = err;
    res.status(400).json({ error: 'Token invalid', message });
    return;
  }

  req.userId = decoded.id;
  const user = await WebUser.findById(req.userId);

  if (!user) {
    res.status(404).json({ error: 'No user found' });
    return;
  }

  res.json({ text: 'User validated' });
});

export default router;
