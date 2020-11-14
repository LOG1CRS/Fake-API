import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import jwt from 'jsonwebtoken';

// Import routes controllers
import homeRoutes from './routes/client.routes';
import apiRoutes from './routes/api.routes';
import userRoutes from './routes/user.routes';

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
if (process.env.NODE_ENV === 'development') {
  app.use(express.static(path.join(__dirname, '../', 'client', 'build')));
} else if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client')));
}

// Routes
app.use('/api/users', userRoutes);
app.use('/api', apiRoutes);
app.use('/', homeRoutes);

export default app;
