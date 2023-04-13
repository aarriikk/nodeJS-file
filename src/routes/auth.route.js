import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller.js';

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
  }
}
