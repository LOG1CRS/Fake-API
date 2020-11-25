import WebUser from '../models/WebUser';

export const signUp = async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);

  // const newWebUser = new WebUser({
  //   email,
  //   password: await WebUser.encryptPassword(password),
  // });

  // console.log(newWebUser);
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
};
