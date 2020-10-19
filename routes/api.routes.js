const { Router } = require('express');
const router = Router();
const { index, error } = require('../controllers/api.controller');

router.get('/', index);

router.get('/*', error);

module.exports = router;
