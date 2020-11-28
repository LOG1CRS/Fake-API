import { Router } from 'express';
import { signUp, signIn, authTest } from '../controllers/auth.controller';
import { verifyToken } from '../middlewares/authJwt';

const router = Router();

router.get('/', verifyToken, authTest);

router.post('/sign-up', signUp);

router.post('/sign-in', signIn);

export default router;
