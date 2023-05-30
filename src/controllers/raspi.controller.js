import { RaspiService } from '../services/raspi.service.js';

export class RaspiController {
  raspi = new RaspiService();

  createRaspi = async (req, res, next) => {
    try {
      const newRaspi = await this.raspi.createRaspi(req.body.machineId);

      res.status(201).json({
        status: 'success',
        message: 'create raspi',
        data: newRaspi,
      });
    } catch (err) {
      next(err);
    }
  };

  createEnergy = async (req, res, next) => {
    try {
      const newEnergy = await this.raspi.createEnergy(req.body);

      res.status(201).json({
        status: 'success',
        message: 'create energy',
        data: newEnergy,
      });
    } catch (err) {
      next(err);
    }
  };

  createQty = async (req, res, next) => {
    try {
      const newQty = await this.raspi.createQty(req.body);

      res.status(201).json({
        status: 'success',
        message: 'create qty',
        data: newQty,
      });
    } catch (err) {
      next(err);
    }
  };

  createDt = async (req, res, next) => {
    try {
      const newDt = await this.raspi.createDownTime(req.body);

      res.status(201).json({
        status: 'success',
        message: 'create dt',
        data: newDt,
      });
    } catch (err) {
      next(err);
    }
  };

  getAllRaspi = async (req, res, next) => {
    try {
      const machineId = req.query.machineId;
      const latest = req.query.latest;
      let raspi;

      if (machineId && latest) {
        raspi = await this.raspi.findAllRaspi(machineId, latest);
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

  getAllEnergy = async (req, res, next) => {
    try {
      const energy = await this.raspi.findAllEnergy();

      res.status(200).json({
        status: 'success',
        message: 'get all data energy',
        data: energy,
      });
    } catch (err) {
      next(err);
    }
  };

  getAllQty = async (req, res, next) => {
    try {
      const qty = await this.raspi.findAllQty();

      res.status(200).json({
        status: 'success',
        message: 'get all data qty',
        data: qty,
      });
    } catch (err) {
      next(err);
    }
  };

  getAllDt = async (req, res, next) => {
    try {
      const dt = await this.raspi.findAllDt();

      res.status(200).json({
        status: 'success',
        message: 'get all data dt',
        data: dt,
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
