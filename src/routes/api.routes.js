import { Router } from 'express';
import { index, error } from '../controllers/api.controller';
const router = Router();

router.get('/', index);

router.get('/*', error);

module.exports = router;
