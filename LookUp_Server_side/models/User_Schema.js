var mongoose  = require('mongoose');
var schema = mongoose.Schema;   

var User_schema = new mongoose.Schema({
      
      ID:{
            type: Number,
            index: true,
            required:true
      },
      name:{
            type: String,
            lowercase:true, 
            required:true
      },
      email:{
            type: String,
            required:true
      },
      password:{
            type: String,
            required:true
      },
      disables:{
            type: Boolean
      },
      birthDay:{
            type: String
      },
      profilePicture:{
            type: String,
            default: "url.."
      },
      favoriteTracks:[{
            type:mongoose.Schema.Types.ObjectId,ref:"Track"
      }],
      accessibility:{         // '0'-normal | '1'-blind | '2'-deaf
            type: Number,
            required: true
      },
      trackRecords:[{
            type:mongoose.Schema.Types.ObjectId,ref:"Track"
      }],
      BLE:[{
            type:mongoose.Schema.Types.ObjectId,ref:"BLE"
      }]
      
    });

var userSchema = mongoose.model('User',User_schema);
module.exports = userSchema;