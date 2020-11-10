import index from '../templates/response_templates/index.json';
import error from '../templates/response_templates/error.json';
const apiCtrl = {};

apiCtrl.index = (req, res) => {
  res.json(index);
};

apiCtrl.error = (req, res) => {
  res.json(error);
};

module.exports = apiCtrl;
