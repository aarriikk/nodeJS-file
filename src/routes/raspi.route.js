import { Router } from 'express';
import { RaspiController } from '../controllers/raspi.controller.js';

export class RaspiRoutes {
  path = '/raspi';
  router = Router();
  raspi = new RaspiController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router
      .route(`${this.path}`)
      .get(this.raspi.getAllRaspi)
      .post(this.raspi.createRaspi);
    this.router
      .route(`${this.path}/:id`)
      .put(this.raspi.updatedByIdRaspi)
      .delete(this.raspi.deletedByIdRaspi)
      .get(this.raspi.getByIdRaspi);
  }
}
