import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connect, set } from 'mongoose';
import morgan from 'morgan';
import helmet from 'helmet';
import { NODE_ENV, PORT, ORIGIN, CREDENTIALS } from './config/index.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { dbConnection } from './utils/db.util.js';

export class App {
  constructor(routes) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 3000;

    this.connectDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('app running on port ', this.port);
      console.log('Env: ', this.env);
    });
  }

  getServer() {
    return this.app;
  }

  async connectDatabase() {
    if (this.env !== 'production') {
      set('debug', true);
      set('strictQuery', true);
    }

    await connect(dbConnection.url);
  }

  initializeMiddlewares() {
    this.app.use(morgan('dev'));
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  initializeRoutes(routes) {
    routes.forEach((route) => {
      this.app.use('/api', route.router);
    });
  }

  initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}
