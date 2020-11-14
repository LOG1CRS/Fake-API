import { Router } from 'express';
import {
  getUsers,
  createUser,
  getSpecificUsers,
  userError,
} from '../controllers/user.controller';

const router = Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getSpecificUsers);

router.get('/*', userError);

export default router;
