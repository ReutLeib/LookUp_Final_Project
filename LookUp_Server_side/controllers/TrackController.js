const mongoose          = require('mongoose');
      // schemas:
var   User              = require('../models/UserSchema');
      Track             = require('../models/TrackSchema');

/************************** ROUTE: insertTrack **************************/

exports.insertTrack = (req,res)=>{
  
      console.log("Enter route(POST): /insertTrack");
      const newTrack = new Track(req.body);
      newTrack.save(err => {
            if (err){
              console.log(err);
              return res.status(500).send(err);
            }
            console.log(`Track ${req.body.title} has been created successfully`);
            res.status(200).send(`Track ${req.body.title} has been created successfully`);
      });


};

// exports.isUnique = (_title) => {    // return boolean

//       Track.find({title:_title}, (err,track)=>{
//             if(err){
//                   console.log(err);
//                   return false;
//             }
//             if(track == "")   // not found
//                   return true;
//             else  // title exist
//                   return false;
//       })
// } 

////////////////////////////////////////////////////////////////////////////////////


/************************** ROUTE: deleteTrackBytitle **************************/

exports.deleteTrackBytitle = (req, res) => {

      console.log("Enter route(DELETE): /deleteTrackBytitle");
      res.status(200).send("OK");

};


////////////////////////////////////////////////////////////////////////////////////