import { Raspi } from '../models/raspi.model.js';
import { createError } from '../utils/error.util.js';

export class RaspiService {
  // service untuk membuat document input raspberry di mongo
  async createRaspi(raspiData) {
    const newRaspi = await Raspi.create(raspiData);
    return newRaspi;
  }

  // me-return seluruh data di raspi
  async findAllRaspi(machineId, latest) {
    let raspi;

    if (machineId && latest) {
      raspi = await Raspi.find({ machineId }).sort({ createdAt: -1 }).exec();
    } else if (machineId) {
      raspi = await Raspi.find({ machineId }).exec();
    } else {
      raspi = await Raspi.find().exec();
    }

    return raspi;
  }

  // me-return data raspi berdasarkan id
  async findByIdRaspi(id) {
    const findRaspi = await Raspi.findById(id).lean();
    if (!findRaspi) return createError(409, 'Raspi does not exists');
    return findRaspi;
  }

  // update data raspi berdasarkan id
  async updateByIdRaspi(id, raspiData) {
    const updatedRaspi = await Raspi.findByIdAndUpdate(id, raspiData, {
      new: true,
    });
    if (!updatedRaspi) return createError(409, 'Raspi does not exists');
    return updatedRaspi;
  }

  // delete data raspi berdasarkan id
  async deleteByIdRaspi(id) {
    const deletedRaspi = await Raspi.findByIdAndDelete(id);
    if (!deletedRaspi) return createError(409, 'Raspi does not exists');
    return deletedRaspi;
  }
}
