var mongoose = require('mongoose');

var TrackSchema = new mongoose.Schema({
      id: mongoose.Schema.Types.ObjectId,
      startPoint: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LatLangBounds",
            required: true
      },
      endPoint: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LatLangBounds",
            required: true
      },
      middlePoint: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "LatLangBounds"
      }],
      type: {
            type: String,
            required: true
      },
      title: {
            type: String,
            required: true
      },
      comment: [String],
      rating: {
            type: Number
      },
      changesDuringTrack: {
            type: Boolean
      },
      diffucultyLevel: {
            type: Number
      }
});

module.exports = mongoose.model("TrackSchema", TrackSchema, "Tracks");