import { RaspiService } from '../services/raspi.service.js';

export class RaspiController {
  raspi = new RaspiService();

  createRaspi = async (req, res, next) => {
    try {
      const newRaspi = await this.raspi.createRaspi(req.body);

      res.status(201).json({
        status: 'success',
        message: 'create raspi',
        data: newRaspi,
      });
    } catch (err) {
      next(err);
    }
  };

  getAllRaspi = async (req, res, next) => {
    try {
      const machineId = req.query.machineId;
      let raspi;

      if (machineId) {
        raspi = await this.raspi.findAllRaspi(machineId);
      } else {
        raspi = await this.raspi.findAllRaspi();
      }

      res.status(200).json({
        status: 'success',
        message: 'get all data raspi',
        data: raspi,
      });
    } catch (err) {
      next(err);
    }
  };

  getByIdRaspi = async (req, res, next) => {
    try {
      const { id } = req.params;
      const raspi = await this.raspi.findByIdRaspi(id);

      res.status(200).json({
        status: 'success',
        message: 'get raspi by id',
        data: raspi,
      });
    } catch (err) {
      next(err);
    }
  };

  updatedByIdRaspi = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedRaspi = await this.raspi.updateByIdRaspi(id, {
        ...req.body,
      });

      res.status(200).json({
        status: 'success',
        message: 'update raspi',
        data: updatedRaspi,
      });
    } catch (err) {
      next(err);
    }
  };

  deletedByIdRaspi = async (req, res, next) => {
    try {
      const { id } = req.params;
      await this.raspi.deleteByIdRaspi(id);

      res.status(200).json({
        status: 'success',
        message: 'delete raspi',
        data: [],
      });
    } catch (err) {
      next(err);
    }
  };
}
