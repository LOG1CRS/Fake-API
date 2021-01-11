import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import favicon from 'serve-favicon';
import jwt from 'jsonwebtoken';

// Import routes controllers
import clientRoutes from './routes/client.routes';
import apiRoutes from './routes/api.routes';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import webUserRoutes from './routes/webUser.routes';

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
  app.use(
    favicon(path.join(__dirname, '../', 'client', 'build', 'Fake-icon.png'))
  );
} else if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client')));
  app.use(favicon(path.join(__dirname, 'client', 'Fake-icon.png')));
}

// Routes
app.use('/api/webUsers', webUserRoutes);
app.use('/api/users', userRoutes);
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);
app.use('/', clientRoutes);

export default app;
