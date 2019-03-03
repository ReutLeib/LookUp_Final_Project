var mongoose  = require('mongoose');

var BLESchema = new mongoose.schema({
      id: mongoose.Schema.Types.ObjectId,
      // ID: {type: Number, index: true, required: true},
      Longtitude: {type: Number, required: true},
      Latitude: {type: Number, required: true},
      deviceName: {type: String, required: true},
      writeData: {type: Number},      // boolean
      readData: {type: Number}      // boolean
      // TODO: ??
      // Embedded:{}
    }
);

var BLE = mongoose.model("BLESceham", BLESchema, "BLE");
module.exports = BLE;