var mongoose  = require('mongoose');
var schema = mongoose.Schema;   

var User = new mongoose.Schema({
      
    
    });

var userSchema = mongoose.model('Favorite',User);
module.exports = userSchema;