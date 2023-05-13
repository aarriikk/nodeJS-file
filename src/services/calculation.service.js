import { Raspi } from '../models/raspi.model.js';
import { Parameter } from '../models/parameter.model.js';
import { createError } from '../utils/error.util.js';

export class CalculationService {
  async getPdfData(machineId, id) {
    const parameter = await Parameter.findOne({ machineId }).exec();
    const raspberry = await Raspi.findOne({ machineId, _id: id }).exec();

    if (!parameter || !raspberry)
      throw createError(409, 'Machine does not exists');

    // uptime - downtime
    const realTime = parameter.upTime - raspberry.downTime;

    const cycleTime = realTime / raspberry.realQuantity;

    const optimalQty = parameter.upTime / cycleTime;

    const productionRate = (raspberry.realQuantity / optimalQty) * 100;

    const percentageQty =
      (raspberry.realQuantity / parameter.quantityTarget) * 100;

    const energyConsumption =
      (raspberry.kiloWattPerHour * 1114) / raspberry.realQuantity;

    const percentageTime = (realTime / parameter.upTime) * 100;

    const OEE = (raspberry.realQuantity * cycleTime) / parameter.upTime;

    const rawMaterial =
      (raspberry.realQuantity * parameter.rawMaterialGram) / 100;

    const kwh = raspberry.kiloWattPerHour * 1114;

    const rawMaterialCost = rawMaterial * parameter.rawMaterialPrice;

    const actualBep =
      kwh +
      ((raspberry.realQuantity * parameter.rawMaterialGram) / 1000) *
        parameter.rawMaterialPrice;

    const actualBEP = actualBep / raspberry.realQuantity;

    const optimalBep =
      kwh +
      ((optimalQty * parameter.rawMaterialGram) / 1000) *
        parameter.rawMaterialPrice;

    const optimalBEP = optimalBep / optimalQty;

    const downTimeCost = (raspberry.downTime / cycleTime) * actualBEP;

    return {
      machineId,
      realTime,
      cycleTime,
      optimalQty,
      productionRate,
      OEE,
      percentageQty,
      energyConsumption,
      percentageTime,
      rawMaterialCost,
      actualBEP,
      optimalBEP,
      downTimeCost,
    };
  }
}
