const mongoose          = require('mongoose');
      // schemas:
var   User              = require('../models/UserSchema');
      Track             = require('../models/TrackSchema');

/************************** ROUTE: insertTrack **************************/

exports.insertTrack = (req,res)=>{
  
      console.log("Enter route(POST): /insertTrack");
      const newTrack = new Track(req.body);
      newUser.save(err => {
            if (err){
              console.log(err);
              return res.status(500).send({ "Message": "Internal server error" });
            }
            console.log(`User ${req.body.email} has been created successfully`);
            res.status(200).send(`User ${req.body.email} has been created successfully`);
      });


};

////////////////////////////////////////////////////////////////////////////////////


/************************** ROUTE: deleteTrackBytitle **************************/

exports.deleteTrackBytitle = (req, res) => {

      console.log("Enter route(DELETE): /deleteTrackBytitle");
      res.status(200).send("OK");

};


////////////////////////////////////////////////////////////////////////////////////