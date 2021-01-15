import WebUser from '../models/WebUser';

export const getWebUsers = async (req, res) => {
  // validate that the user has the necessary role
  const query = await WebUser.find();
  res.send(query);
};
