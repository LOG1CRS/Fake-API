const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

// Import routes controllers
const homeRoutes = require('./routes/client.routes');
const apiRoutes = require('./routes/api.routes');
const userRoutes = require('./routes/user.routes');

// Initializing express
const app = express();

// Settings
app.set('port', process.env.PORT || 9000);
app.set('json spaces', 2);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api', apiRoutes);
app.use('/', homeRoutes);

module.exports = app;
