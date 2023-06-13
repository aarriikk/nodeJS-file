import { DownTime } from '../models/downTime.js';
import { Energy } from '../models/energy.js';
import { Quantity } from '../models/quantity.js';
import { Raspi } from '../models/raspi.model.js';
import { createError } from '../utils/error.util.js';

export class RaspiService {
  // service untuk membuat document input raspberry di mongo
  async createRaspi(raspiData) {
    const energy = await Energy.find({}).sort({ _id: -1 }).exec();
    const qty = await Quantity.findOne({ machine_id: raspiData }).exec();
    const dt = await DownTime.findOne({ machine_id: raspiData }).exec();

    let newRaspi;

    if (energy.length > 1) {
      newRaspi = await Raspi.create({
        machineId: raspiData,
        kiloWattPerHour: energy[0].value - energy[1].value,
        realQuantity: qty.value,
        downTime: dt.value,
      });
    } else {
      newRaspi = await Raspi.create({
        machineId: raspiData,
        kiloWattPerHour: energy[0].value,
        realQuantity: qty.value,
        downTime: dt.value,
      });
    }

    await Quantity.updateOne({ machine_id: raspiData }, { value: 0 });
    await DownTime.updateOne(
      { machine_id: raspiData },
      { value: 0, downTimeStartTime: null }
    );

    return newRaspi;
  }

  async createEnergy(raspiData) {
    const newEnergy = await Energy.create(raspiData);
    return newEnergy;
  }

  async createQty(raspiData) {
    const lastCounter = await Quantity.findOne({
      machine_id: raspiData.machine_id,
    }).exec();
    let newQty;
    if (lastCounter) {
      await Quantity.updateOne(
        { machine_id: raspiData.machine_id },
        { value: lastCounter.value + 1 },
        { new: true }
      );
      newQty = await Quantity.findOne({
        machine_id: raspiData.machine_id,
      }).exec();
    } else {
      newQty = await Quantity.create({
        value: 1,
        machine_id: raspiData.machine_id,
      });
    }
    return newQty;
  }

  async createDownTime(raspiData) {
    let findDownTime = await DownTime.findOne({
      machine_id: raspiData.machine_id,
    }).exec();

    if (!findDownTime) {
      findDownTime = await DownTime.create({
        machine_id: raspiData.machine_id,
        value: 0,
      });
    }

    if (raspiData.value === 0) {
      if (findDownTime.downTimeStartTime === null) {
        findDownTime.downTimeStartTime = Date.now();
      }
    } else if (raspiData.value === 1) {
      if (findDownTime.downTimeStartTime !== null) {
        const downTimeDuration = Date.now() - findDownTime.downTimeStartTime;
        findDownTime.value += Math.floor(downTimeDuration / 1000);
        findDownTime.downTimeStartTime = null;
      }
    }

    await findDownTime.save();

    return findDownTime.value;
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
    const energy = await Energy.find({}).exec();
    return energy;
  }

  async findAllQty() {
    const qty = await Quantity.find({}).exec();
    return qty;
  }

  async findAllDt() {
    const dt = await DownTime.find({}).exec();
    return dt;
  }

  async findByMachineIdQty(machineId) {
    const qty = await Quantity.findOne({ machine_id: machineId }).exec();
    if (!qty) throw createError(409, 'Data does not exists');
    return qty;
  }

  async findByMachineIdDt(machineId) {
    const dt = await DownTime.findOne({ machine_id: machineId }).exec();
    if (!dt) throw createError(409, 'Data does not exists');
    return dt;
  }

  // me-return data raspi berdasarkan id
  async findByIdRaspi(id) {
    const findRaspi = await Raspi.findById(id).lean();
    if (!findRaspi) throw createError(409, 'Raspi does not exists');
    return findRaspi;
  }

  // update data raspi berdasarkan id
  async updateByIdRaspi(id, raspiData) {
    const updatedRaspi = await Raspi.findByIdAndUpdate(id, raspiData, {
      new: true,
    });
    if (!updatedRaspi) throw createError(409, 'Raspi does not exists');
    return updatedRaspi;
  }

  // delete data raspi berdasarkan id
  async deleteByIdRaspi(id) {
    const deletedRaspi = await Raspi.findByIdAndDelete(id);
    if (!deletedRaspi) throw createError(409, 'Raspi does not exists');
    return deletedRaspi;
  }
}
