const db = require('../config/db');
const mongoose = require('mongoose');
const UserModel = require ("../model/user.model")
const{ Schema } = mongoose;

const Parameter4Schema = new Schema({
    Machine_Id: {
        type: Number,
        default: 4
      },
      TipeBenda_D: {
        type: String,
        required: true
      },
      UpTime_D: {
        type: Number,
        required: true
      },
      CycleTime_D: {
        type: Number,
        required: true
      },
      TargetQTY_D: {
        type: Number,
        required: true
      },
      RawMattGram_D: {
        type: Number,
        required: true
      },
      RawMattPrice_D: {
        type: Number,
        required: true
      }
    
});


const Parameter4Model = db.model('Parameter4',Parameter4Schema);

module.exports = Parameter4Model;