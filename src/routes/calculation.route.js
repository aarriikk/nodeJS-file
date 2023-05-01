import { Router } from 'express';
import { CalculationController } from '../controllers/calculation.controller.js';

export class CalculationRoutes {
  path = '/calculation';
  router = Router();
  calculation = new CalculationController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}`, this.calculation.getDataPdf);
  }
}
