import { Schema, model } from 'mongoose';

const downTimeSchema = new Schema(
  {
    value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const DownTime = model('DownTime', downTimeSchema);
