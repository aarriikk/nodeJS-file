import { ParameterService } from '../services/parameter.service.js';

export class ParameterController {
  parameter = new ParameterService();

  // create parameter baru
  createParameter = async (req, res, next) => {
    try {
      const {
        machineId,
        objectType,
        upTime,
        cycleTime,
        quantityTarget,
        rawMaterialGram,
        rawMaterialPrice,
      } = req.body;
      const paramData = {
        machineId,
        objectType,
        upTime,
        cycleTime,
        quantityTarget,
        rawMaterialGram,
        rawMaterialPrice,
      };
      const newParameter = await this.parameter.createParameter(paramData);

      res.status(201).json({
        status: 'success',
        message: 'create parameter',
        data: newParameter,
      });
    } catch (err) {
      next(err);
    }
  };

  // get semua data parameter
  getAllParam = async (req, res, next) => {
    try {
      const machineId = req.query.machineId;
      let params;

      if (machineId) {
        params = await this.parameter.findAllParam(machineId);
      } else {
        params = await this.parameter.findAllParam();
      }

      res.status(200).json({
        status: 'success',
        message: 'get all param',
        data: params,
      });
    } catch (err) {
      next(err);
    }
  };

  // get data parameter berdasarkan machine id
  getByMachineIdParam = async (req, res, next) => {
    try {
      const { machineId } = req.query;
      const param = await this.parameter.findOneParam(machineId);

      res.status(200).json({
        status: 'success',
        message: 'get one param',
        data: param,
      });
    } catch (err) {
      next(err);
    }
  };

  // update data parameter berdasarkan machine id
  updateByMachineIdParam = async (req, res, next) => {
    try {
      const { machineId } = req.body;
      const updatedParam = await this.parameter.updateOneParam(machineId, {
        ...req.body,
      });

      res.status(200).json({
        status: 'success',
        message: 'updated param',
        data: updatedParam,
      });
    } catch (err) {
      next(err);
    }
  };

  // delete data param berdasarkan machine id
  deleteByMachineIdParam = async (req, res, next) => {
    try {
      const { machineId } = req.body;
      await this.parameter.deleteByMachineIdParam(machineId);

      res.status(200).json({
        status: 'success',
        message: 'deleted param machine id',
        data: [],
      });
    } catch (err) {
      next(err);
    }
  };

  // delete data param berdasarkan id param
  deleteByIdParam = async (req, res, next) => {
    try {
      const { id } = req.params;
      await this.parameter.deleteByIdParam(id);

      res.status(200).json({
        status: 'success',
        message: 'deleted param by id',
        data: [],
      });
    } catch (err) {
      next(err);
    }
  };
}
