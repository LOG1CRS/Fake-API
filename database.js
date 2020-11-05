const mongoose = require('mongoose');

const MONGOOSE_URI = process.env.MONGOOSE_URI
  ? process.env.MONGOOSE_URI
  : 'mongodb://localhost/fake-api';

mongoose.connect(MONGOOSE_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection.on('error', (err) => {
  console.log('err', err);
});

mongoose.connection.on('connected', (err, res) => {
  console.log('DB is connected');
});
