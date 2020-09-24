const mongoose = require('mongoose');
const { MONGOOSE_URI } = process.env;
console.log(MONGOOSE_URI);
mongoose.connect(MONGOOSE_URI);

mongoose.connection.on('error', (err) => {
  console.log('err', err);
});

mongoose.connection.on('connected', (err, res) => {
  console.log('Mongoose is connected');
});
