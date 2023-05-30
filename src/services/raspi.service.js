import { Counter } from '../models/counter.js';
import { DownTime } from '../models/downTime.js';
import { Energy } from '../models/energy.js';
import { Quantity } from '../models/quantity.js';
import { Raspi } from '../models/raspi.model.js';
import { createError } from '../utils/error.util.js';

export class RaspiService {
  // service untuk membuat document input raspberry di mongo
  async createRaspi(raspiData) {
    const energy = await Energy.find({}).sort({ _id: -1 }).exec();
    const qty = await Quantity.find({}).sort({ _id: -1 }).exec();
    const dt = await Counter.find({}).sort({ _id: -1 }).exec();

    const newRaspi = await Raspi.create({
      machineId: raspiData,
      kiloWattPerHour: energy[0].value,
      realQuantity: qty[0].value,
      downTime: dt[0].value,
    });

    await Quantity.create({ value: 0 });
    await DownTime.create({ value: dt[0].value });
    await Counter.create({ value: 0 });

    return newRaspi;
  }

  async createEnergy(raspiData) {
    const newEnergy = await Energy.create(raspiData);
    return newEnergy;
  }

  async createQty(raspiData) {
    const newQty = await Quantity.create(raspiData);
    return newQty;
  }

  async createDownTime(raspiData) {
    const lastCounter = await Counter.find().sort({ _id: -1 }).exec();
    let counter;
    if (raspiData.value === 0) {
      counter = await Counter.create({
        value: lastCounter.length ? lastCounter[0].value + 1 : 1,
      });
    }
    return counter;
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

  async findAllEnergy() {
    const energy = await Energy.find({}).sort({ createdAt: -1 }).exec();
    return energy;
  }

  async findAllQty() {
    const qty = await Quantity.find({}).sort({ createdAt: -1 }).exec();
    return qty;
  }

  async findAllDt() {
    const dt = await Counter.find({}).sort({ createdAt: -1 }).exec();
    return dt;
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
