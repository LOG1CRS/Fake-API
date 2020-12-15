import mongoose from 'mongoose';

let MONGOOSE_URI = '';

if (process.env.NODE_ENV === 'production') {
  MONGOOSE_URI = process.env.MONGOOSE_URI;
} else {
  MONGOOSE_URI = process.env.MONGOOSE_URI_DEV;
}

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
