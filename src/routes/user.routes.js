import { Router } from 'express';
import {
  getUsers,
  createUser,
  getSpecificUsers,
} from '../controllers/user.controller';
const router = Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getSpecificUsers);

router.get('/*', (req, res) => {
  res.status(404);
  res.json('Error 404, Fake API cannot understand your request.');
});

module.exports = router;
