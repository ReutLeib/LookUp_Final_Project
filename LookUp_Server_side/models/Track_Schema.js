var mongoose  = require('mongoose');
var schema = mongoose.Schema;   

var Point2D = new mongoose.schema({
      x:{
            type: Number,
            required:true 
      },
      y:{
            type: Number,
            required:true
      }
})


var Track_schema = new mongoose.Schema({
      
      ID:{
            type: Number,
            index: true,
            required:true
      },
      startPoint:{
            type: Point2D
      },
      endPoint:{
            type: Point2D
      },
      middlePoint:[
            Point2D
      ],
      type:{
            type: String,
            required:true
      },
      title:{
            type: String,
            required:true
      },
      comment: [
            String
      ],
      rating:{
            type: Number
      },
      // TODO: ??
      // changesDuringTrack:{

      // },
      diffucultyLevel:{
            type: Number
      }

    });

var trackSchema = mongoose.model('Track',Track_schema);
module.exports = trackSchema;