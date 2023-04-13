import { Router } from 'express';
import { ParameterController } from '../controllers/parameter.controller.js';

export class ParameterRoutes {
  path = '/parameter';
  router = Router();
  parameter = new ParameterController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router
      .route(`${this.path}`)
      .get(this.parameter.getAllParam)
      .post(this.parameter.createParameter);
    this.router
      .route(`${this.path}/machine`)
      .get(this.parameter.getByMachineIdParam)
      .put(this.parameter.updateByMachineIdParam)
      .delete(this.parameter.deleteByMachineIdParam);
    this.router.delete(`${this.path}/:id`, this.parameter.deleteByIdParam);
  }
}
