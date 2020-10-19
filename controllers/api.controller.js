const index = require('../templates/response_templates/index.json');
const error = require('../templates/response_templates/error.json');
const apiCtrl = {};

apiCtrl.index = (req, res) => {
  res.json(index);
};

apiCtrl.error = (req, res) => {
  res.json(error);
};

module.exports = apiCtrl;
