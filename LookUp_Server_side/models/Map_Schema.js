var mongoose  = require('mongoose');
var schema = mongoose.Schema;   

var Map_schema = new mongoose.Schema({
      
      // TODO: schema:
      
      // ID:{

      // },
      // center:{

      // },
      // zoom:{

      // },
      // layer:{

      // },
      // geoCoordinates:{

      // },
      // options:{

      // },
      // navigationMode:{

      // },
      // track:{

      // }
  
    });

var mapSchema = mongoose.model('Maps',Map_schema);
module.exports = mapSchema;