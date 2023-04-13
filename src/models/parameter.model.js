import { Schema, model } from 'mongoose';

const parameterSchema = new Schema(
  {
    machineId: {
      type: Number,
      required: true,
    },
    objectType: {
      type: String,
      required: true,
    },
    upTime: {
      type: Number,
      required: true,
    },
    cycleTime: {
      type: Number,
      required: true,
    },
    quantityTarget: {
      type: Number,
      required: true,
    },
    rawMaterialGram: {
      type: Number,
      required: true,
    },
    rawMaterialPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Parameter = model('Parameter', parameterSchema);
