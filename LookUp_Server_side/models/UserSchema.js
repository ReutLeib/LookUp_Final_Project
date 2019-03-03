var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accessibility: {
    type: Number,
    required: true
  }, // '0'-normal | '1'-blind | '2'-deaf
  birthDay: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: true
  },
  favoriteTracks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "TrackSchema"
  }],
  trackRecords: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "TrackSchema"
  }],
  BLE: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "BLEScehma"
  }]
});

module.exports = mongoose.model("UserSchema", UserSchema, "Users");