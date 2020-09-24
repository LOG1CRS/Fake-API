const { Router } = require('express');
const router = Router();

router.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'client', 'build') });
});

module.exports = router;
