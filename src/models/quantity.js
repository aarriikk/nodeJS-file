import { Schema, model } from 'mongoose';

const quantitySchema = new Schema(
  {
    value: {
      type: Number,
      required: true,
    },
    machine_id: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Quantity = model('Quantity', quantitySchema);
