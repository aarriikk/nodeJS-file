import { Router } from 'express';
import { RaspiController } from '../controllers/raspi.controller.js';

export class RaspiRoutes {
  path = '/raspberry';
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
      .route(`${this.path}/energy`)
      .post(this.raspi.createEnergy)
      .get(this.raspi.getAllEnergy);
    this.router
      .route(`${this.path}/qty`)
      .post(this.raspi.createQty)
      .get(this.raspi.getAllQty);
    this.router
      .route(`${this.path}/dt`)
      .post(this.raspi.createDt)
      .get(this.raspi.getAllDt);
    this.router.get(`${this.path}/kwh`, this.raspi.getAllKwh);
    this.router
      .route(`${this.path}/:id`)
      .put(this.raspi.updatedByIdRaspi)
      .delete(this.raspi.deletedByIdRaspi)
      .get(this.raspi.getByIdRaspi);
  }
}
