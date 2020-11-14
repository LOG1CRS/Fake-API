import User from '../models/User';
import response from '../templates/response_templates/response.json';
import errorTemplate from '../templates/response_templates/error.json';

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const createUser = async (req, res) => {
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

export const getSpecificUsers = async (req, res) => {
  const required_ids = req.params['id'];
  const ids = required_ids.split(',');
  response.response.count = ids.length;
  response.results = ids;
  res.json(response);
};

export const userError = (req, res) => {
  res.status(404);
  res.json(errorTemplate);
};
