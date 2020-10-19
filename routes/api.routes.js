const { Router } = require('express');
const { route } = require('./user.routes');
const router = Router();
const userRoutes = require('./user.routes');

router.get('/', (req, res) => {
  res.json('Fake API JSON');
});

router.get('/*', (req, res) => {
  res.status(404);
  res.json('Error 404, Fake API cannot understand your request.');
});

module.exports = router;
