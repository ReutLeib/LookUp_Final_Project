const mongoose          = require('mongoose');
      // schemas:
var   User              = require('../models/UserSchema');
      Track             = require('../models/TrackSchema');

/************************** ROUTE: insertTrack **************************/

exports.insertTrack = (req,res)=>{
  
      console.log("Enter route(POST): /insertTrack");
      res.status(200).send("OK");

};

////////////////////////////////////////////////////////////////////////////////////


/************************** ROUTE: deleteTrackBytitle **************************/

exports.deleteTrackBytitle = (req, res) => {

      console.log("Enter route(DELETE): /deleteTrackBytitle");
      res.status(200).send("OK");

};


////////////////////////////////////////////////////////////////////////////////////