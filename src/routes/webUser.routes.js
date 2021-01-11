// only use for testing
import { Router } from 'express';
import WebUser from '../models/WebUser';

const router = Router();

router.get('/', async (req, res) => {
  // validate that the user has the necessary role
  const query = await WebUser.find();
  res.send(query);
});

export default router;
