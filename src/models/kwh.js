import { Schema, model } from 'mongoose';

const kwhSchema = new Schema(
  {
    value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Kwh = model('Kwh', kwhSchema);
