import { Schema, model } from 'mongoose';

const raspiSchema = new Schema(
  {
    realQuantity: {
      type: Number,
      required: true,
    },
    kiloWattPerHour: {
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

export const Raspi = model('Raspberry', raspiSchema);
