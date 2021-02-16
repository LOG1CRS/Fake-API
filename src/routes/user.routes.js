import { Router } from 'express';
import {
  getUsers,
  createUser,
  getSpecificUsers,
  userError,
} from '../controllers/user.controller';
import { verifyToken } from '../middlewares/authJwt';

const router = Router();

router.get('/', verifyToken, getUsers);

router.post('/', verifyToken, createUser);

router.get('/:id', verifyToken, getSpecificUsers);

router.get('/*', userError);

export default router;
