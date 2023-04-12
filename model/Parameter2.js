const db = require('../config/db');
const mongoose = require('mongoose');
const UserModel = require ("../model/user.model")
const{ Schema } = mongoose;

const Parameter2Schema = new Schema({
    Machine_Id: {
        type: Number,
        default: 2
      },
      TipeBenda_B: {
        type: String,
        required: true
      },
      UpTime_B: {
        type: Number,
        required: true
      },
      CycleTime_B: {
        type: Number,
        required: true
      },
      TargetQTY_B: {
        type: Number,
        required: true
      },
      RawMattGram_B: {
        type: Number,
        required: true
      },
      RawMattPrice_B: {
        type: Number,
        required: true
      }
    
});


const Parameter2Model = db.model('Parameter2',Parameter2Schema);

module.exports = Parameter2Model;