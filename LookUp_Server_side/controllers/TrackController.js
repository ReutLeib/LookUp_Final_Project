const mongoose          = require('mongoose');
      // schemas:
var   User              = require('../models/UserSchema');
      Track             = require('../models/TrackSchema');
      Points            = require('../models/PointSchema');
      config            = require('../config');

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


/************************** ROUTE: getTrackByTitle **************************/

exports.getTrackByTitle = (req,res)=>{
  
      console.log("Enter route(GET): /getTrackByTitle");

      Track.findOne({title:req.params.title}, (err, track) => {
            if (err) {
              console.log(err);
              return res.status(500).send(err);
            }
            else if(track)
                  return res.status(200).send(track);        
            else
                  return res.status(500).send(config.errors.ERROR_FIND_TRACK);
        });
    
};

/************************** ROUTE: getAllTracks **************************/

exports.getAllTracks = (req,res)=>{
  
      console.log("Enter route(GET): /getAllTracks");

      Track.find({}, (err, tracks) => {
            if (err) {
              console.log(err);
              return res.status(500).send(err);        
            }
            else if(tracks){
                  return res.status(200).send(tracks);        
            }
        });
    
};


/************************** ROUTE: deleteTrackBytitle **************************/

exports.deleteTrackBytitle = (req, res) => {

      console.log("Enter route(DELETE): /deleteTrackBytitle");

      Track.findOne({title:req.params.title}, (err, track) => {
            if (err) {
              res.status(500).send(err);
            }
            else if(track){
                  // remove startPoint
                  Points.findByIdAndRemove(track.startPoint._id, err => {
                        if(err)
                              res.status(500).send(err);
                  });
                  // remove endPoint                  
                  Points.findByIdAndRemove(track.endPoint._id, err => {
                        if(err)
                              res.status(500).send(err);
                  });
                  // remove all middle Points 
                  track.middlePoint.forEach((element)=>{
                        Points.findByIdAndRemove(element, err => {
                              if(err)
                                    res.status(500).send(err);
                        });
                  })
                  // find all users that have this track in "favoriteTracks" array and "trackRecords" array
                  deleteTrackFromUsers(track._id).then((result,err)=>{
                        if(result)
                              res.status(200).send("OK");
                        res.status(500).send(config.errors.ERROR_DELETE_TRACK);
                  });
                  // TODO: remove specific track!
              }
            else
                  res.status(500).send(config.errors.ERROR_DELETE_TRACK);
            });
};


var deleteTrackFromUsers = (id) => {            // return boolean
  
      return new Promise((resolve, reject)=> {
            console.log("function: deleteTrackFromUsers");
       
            User.find({favoriteTracks:id}, (err, user) => {
                  user.forEach((usr)=>{
                        usr.favoriteTracks.forEach((element) =>{
                              var cond = {favoriteTracks:element},
                              update = {$pull:{favoriteTracks:id}},
                              opts = {multi: true};
                  
                              User.update(cond,update,opts, err => {
                                    if(err){
                                          console.log(err);
                                          return false;
                                    }
                              });
                        }); 
                  })
            });  
            User.find({trackRecords:id}, (err, user) => {
                  user.forEach((usr)=>{
                        usr.trackRecords.forEach((element) =>{
                              var cond = {trackRecords:element},
                              update = {$pull:{trackRecords:id}},
                              opts = {multi: true};
                  
                              User.update(cond,update,opts, err => {
                                    if(err){
                                          console.log(err);
                                          return false;
                                    }
                              });
                        }); 
                  })
            });
            return true; 
        });
}; 
