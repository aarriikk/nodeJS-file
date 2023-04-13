import { Raspi } from '../models/raspi.model.js';
import { Parameter } from '../models/parameter.model.js';

export class CalculationService {
  async getRealTime(machineId) {
    const parameter = await Parameter.findOne({ machineId }).exec();
    const raspberry = await Raspi.findOne({});
  }

  async getCycleTime(realTime, realQuantity) {
    return realTime / realQuantity;
  }

  async getOptimalQuantity(upTime, cycleTime) {
    return upTime / cycleTime;
  }

  async getProductionRate(realQuantity, optimalQuanity) {
    return (realQuantity / optimalQuanity) * 100;
  }

  async getPercentageQuantity(realQuantity, targetQuantity) {
    return (realQuantity / targetQuantity) * 100;
  }

  async getEnergyConsumption(kwh, realQuantity) {
    return (kwh * 1114) / realQuantity;
  }

  async getPercentageTime(realTime, upTime) {
    return (realTime / upTime) * 100;
  }
}
