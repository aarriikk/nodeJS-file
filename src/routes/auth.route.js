import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';
import { AuthMiddleware } from '../middlewares/auth.middleware.js';

export class AuthRoutes {
  path = '/auth';
  router = Router();
  auth = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}/signin`, this.auth.signIn);
    this.router.post(`${this.path}/signup`, this.auth.signUp);
    this.router.get(`${this.path}/getMe`, AuthMiddleware, this.auth.getMe);
  }
}
