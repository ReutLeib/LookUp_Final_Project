var mongoose  = require('mongoose');
var schema = mongoose.Schema;   

var Track_schema = new mongoose.Schema({
      
      ID:{
            type: Number,
            index: true,
            required:true
      },
      startPoint:{
            type:mongoose.Schema.Types.ObjectId,ref:"Point2D",
            required:true 
      },
      endPoint:{
            type:mongoose.Schema.Types.ObjectId,ref:"Point2D",
            required:true 
      },
      middlePoint:[{
            type:mongoose.Schema.Types.ObjectId,ref:"Point2D"
      }],
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
      changesDuringTrack:{
            type: Boolean
      },
      diffucultyLevel:{
            type: Number
      }

    });

var trackSchema = mongoose.model('Track',Track_schema);
module.exports = trackSchema;