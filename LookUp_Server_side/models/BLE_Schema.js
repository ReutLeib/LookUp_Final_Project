var mongoose  = require('mongoose');
var schema = mongoose.Schema;   

var BLE_schema = new mongoose.Schema({
      
      ID:{
            type: Number,
            index: true,
            required:true
      },
      deviceName:{     
            type: String,
            required: true
      },
      writeData:{
            type: Number      // boolean
      },
      readData:{
            type: Number      // boolean
      },
      // TODO: ??
      // Embedded:{

      // }
      
    });

var bleSchema = mongoose.model('BLE',BLE_schema);
module.exports = bleSchema;