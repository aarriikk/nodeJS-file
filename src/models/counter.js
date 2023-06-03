import { Schema, model } from 'mongoose';

const counterSchema = new Schema(
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

export const Counter = model('Counter', counterSchema);
