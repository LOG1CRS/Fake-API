const { Router } = require('express');
const router = Router();
const { getUsers, createUser } = require('../controllers/user.controller');

router.get('/', getUsers);

router.post('/', createUser);

router.get('/*', (req, res) => {
  res.status(404);
  res.json('Error 404, Fake API cannot understand your request.');
});

module.exports = router;
