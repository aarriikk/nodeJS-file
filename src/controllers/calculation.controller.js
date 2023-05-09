import { CalculationService } from '../services/calculation.service.js';

export class CalculationController {
  calculation = new CalculationService();

  getDataPdf = async (req, res, next) => {
    try {
      const { machineId } = req.query;

      const dataPdf = await this.calculation.getPdfData(machineId);

      res.status(200).json({
        status: 'success',
        message: 'success get Data',
        data: dataPdf,
      });
    } catch (err) {
      next(err);
    }
  };
}
