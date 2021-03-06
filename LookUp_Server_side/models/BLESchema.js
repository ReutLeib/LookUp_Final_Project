var mongoose  = require('mongoose');

var BLESchema = new mongoose.schema({
      id: mongoose.Schema.Types.ObjectId,
      Longtitude: {type: Number, required: true},
      Latitude: {type: Number, required: true},
      deviceName: {type: String, required: true},
      writeData: {type: Number},      // boolean
      readData: {type: Number}      // boolean
      // TODO: ??
      // Embedded:{}
    }
);

module.exports = mongoose.model("BLESceham", BLESchema, "BLE");