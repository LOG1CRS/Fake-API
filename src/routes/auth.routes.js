import { Router } from 'express';
import { signUp, signIn, authTest } from '../controllers/auth.controller';
import { verifyToken, validateToken } from '../middlewares/authJwt';

const router = Router();

router.get('/', verifyToken, authTest);

router.post('/sign-up', signUp);

router.post('/sign-in', signIn);

router.post('/validate-token', validateToken);

export default router;
