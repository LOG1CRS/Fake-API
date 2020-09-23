const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json('Fake API JSON');
});

module.exports = router;
