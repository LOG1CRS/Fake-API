const controller = {};

controller.getUsers = (req, res) => {
  res.json('Get Users');
};

controller.createUser = (req, res) => {
  res.json(req.body);
};

module.exports = controller;
