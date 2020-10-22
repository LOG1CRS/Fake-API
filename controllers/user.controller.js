const User = require('../models/User');

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

module.exports = controller;
