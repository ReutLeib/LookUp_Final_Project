
var mongoose  = require('mongoose');
var schema = mongoose.Schema;   

var Track = new mongoose.Schema({
      
    
    });

var trackSchema = mongoose.model('Favorite',Track);
module.exports = trackSchema;