const mongoose = require('mongoose');
const { MONGOOSE_URI } = process.env;
mongoose.connect(MONGOOSE_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on('error', (err) => {
  console.log('err', err);
});

mongoose.connection.on('connected', (err, res) => {
  console.log('Mongoose is connected');
});
