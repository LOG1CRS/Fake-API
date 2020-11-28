import index from '../templates/response_templates/index.json';
import error from '../templates/response_templates/error.json';

export const apiIndex = (req, res) => {
  res.status(200).json(index);
};

export const apiError = (req, res) => {
  res.status(400).json(error);
};
