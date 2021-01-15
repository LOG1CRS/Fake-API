// only use for testing
import { Router } from 'express';
import { getWebUsers } from '../controllers/webUser.controller';

const router = Router();

router.get('/', getWebUsers);

export default router;
