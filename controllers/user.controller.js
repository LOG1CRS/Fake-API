const User = require('../models/User');
const response = require('../templates/response_templates/response.json');

const controller = {};

controller.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

controller.createUser = async (req, res) => {
  const { name, lastName, age, birthday, gender, email, cellphone } = req.body;
  const newUser = new User({
    name,
    lastName,
    age,
    birthday,
    gender,
    email,
    cellphone,
  });
  try {
    const userCreated = await newUser.save();
    res.json(userCreated);
  } catch (error) {
    console.error(error);
  }
};

controller.getSpecificUsers = async (req, res) => {
  const required_ids = req.params['id'];
  const ids = required_ids.split(',');
  response.response.count = ids.length;
  response.results = ids;
  res.json(response);
};

module.exports = controller;
