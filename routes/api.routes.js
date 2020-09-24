const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json('Fake API JSON');
});

router.get('/*', (req, res) => {
  res.status(404);
  res.json('Error 404, Fake API cannot understand your request.');
});

module.exports = router;
