import { Parameter } from '../models/parameter.model.js';
import { createError } from '../utils/error.util.js';

export class ParameterService {
  // service untuk membuat document input parameter di mongo
  async createParameter(paramData) {
    const findParam = await Parameter.findOne({
      machineId: paramData.machineId,
    }).exec();
    if (findParam) throw createError(409, 'Machine already exists');

    const newParam = await Parameter.create(paramData);
    return newParam;
  }

  // me-return seluruh data parameter
  async findAllParam(machineId) {
    let params;
    if (machineId) {
      params = await Parameter.find({ machineId }).exec();
    } else {
      params = await Parameter.find({}).exec();
    }
    return params;
  }

  // me-return satu parameter berdasarkan machineId
  async findOneParam(machineId) {
    const param = await Parameter.findOne({ machineId }).lean();
    if (!param) return createError(409, 'Machine does not exists');
    return param;
  }

  // update parameter berdasarkan machineId
  async updateOneParam(machineId, paramData) {
    const updatedParam = await Parameter.findOneAndUpdate(
      { machineId },
      paramData,
      { new: true }
    );
    if (!updatedParam) return createError(409, 'Machine does not exists');
    return updatedParam;
  }

  // delete parameter berdasarkan id
  async deleteByIdParam(id) {
    const deletedParam = await Parameter.findByIdAndDelete(id);
    if (!deletedParam) return createError(409, 'Machine does not exists');
    return deletedParam;
  }

  // delete parameter berdasarkan machineId
  async deleteByMachineIdParam(machineId) {
    const deletedParam = await Parameter.findOneAndDelete({ machineId });
    if (!deletedParam) return createError(409, 'Machine does not exists');
    return deletedParam;
  }
}
