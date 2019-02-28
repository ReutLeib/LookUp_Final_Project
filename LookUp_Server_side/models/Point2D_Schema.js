var mongoose  = require('mongoose');
var schema = mongoose.Schema;   

var Point2D_schema = new mongoose.schema({

    ID:{
        type: Number,
        index: true,
        required:true
  },
      x:{
            type: Number,
            required:true 
      },
      y:{
            type: Number,
            required:true
      }
})

var point2DSchema = mongoose.model('Point2D',Point2D_schema);
module.exports = point2DSchema;