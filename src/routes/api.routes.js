import { Router } from 'express';
import { apiIndex, apiError } from '../controllers/api.controller';
const router = Router();

router.get('/', apiIndex);

router.get('/*', apiError);

export default router;
