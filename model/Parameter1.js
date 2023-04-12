const db = require('../config/db');
const mongoose = require('mongoose');
const UserModel = require ("../model/user.model")
const{ Schema } = mongoose;




const Parameter1Schema = new Schema({
    Machine_Id: {
      type: Number,
      default: 1
    },
    TipeBenda_A: {
      type: String,
      required: true
    },
    UpTime_A: {
      type: Number,
      required: true
    },
    CycleTime_A: {
      type: Number,
      required: true
    },
    TargetQTY_A: {
      type: Number,
      required: true
    },
    RawMattGram_A: {
      type: Number,
      required: true
    },
    RawMattPrice_A: {
      type: Number,
      required: true
    }
  });


const Parameter1Model = db.model('Parameter1',Parameter1Schema);

module.exports = Parameter1Model;