import { Router } from 'express';
import { UserController } from '../controllers/user.controller.js';

export class UserRoutes {
  path = '/user';
  router = Router();
  user = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}`, this.user.getAllUser);
    this.router.get(`${this.path}/find/:id`, this.user.getByIdUser);
    this.router
      .route(`${this.path}/:id`)
      .put(this.user.updateByIdUser)
      .delete(this.user.deleteByIdUser);
  }
}
