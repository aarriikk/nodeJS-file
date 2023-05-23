import { Schema, model } from 'mongoose';

const raspiSchema = new Schema(
  {
    machineId: {
      type: Number,
      required: true,
    },
    realQuantity: {
      type: Number,
      required: true,
    },
    kiloWattPerHour: {
      type: Number,
      required: true,
    },
    downTime: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Raspi = model('Raspberry', raspiSchema);
