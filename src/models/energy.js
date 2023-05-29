import { Schema, model } from 'mongoose';

const energySchema = new Schema(
  {
    value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Energy = model('Energy', energySchema);
