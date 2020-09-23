const express = require('express');
const morgan = require('morgan');
const path = require('path');
const homeRoutes = require('./routes/client.routes');
const apiRoutes = require('./routes/api.routes');
require('dotenv').config();

const app = express();

// Settings
app.set('port', process.env.PORT || 9000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Routes
app.use('/api', apiRoutes);
app.use('/', homeRoutes);

//Starting Server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
