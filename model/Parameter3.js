const db = require('../config/db');
const mongoose = require('mongoose');
const UserModel = require ("../model/user.model")
const{ Schema } = mongoose;

const Parameter3Schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref:UserModel.modelName
    },
    Machine_Id: {
        type: Number,
        default: 3
      },
      TipeBenda_C: {
        type: String,
        required: true
      },
      UpTime_C: {
        type: Number,
        required: true
      },
      CycleTime_C: {
        type: Number,
        required: true
      },
      TargetQTY_C: {
        type: Number,
        required: true
      },
      RawMattGram_C: {
        type: Number,
        required: true
      },
      RawMattPrice_C: {
        type: Number,
        required: true
      }
    
});


const Parameter3Model = db.model('Parameter3',Parameter3Schema);

module.exports = Parameter3Model;