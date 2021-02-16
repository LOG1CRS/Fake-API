// only use for testing
import { Router } from 'express';
import { getWebUsers } from '../controllers/webUser.controller';
import { verifyToken } from '../middlewares/authJwt';

const router = Router();

router.get('/', verifyToken, getWebUsers);

export default router;
