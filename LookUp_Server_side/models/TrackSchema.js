var   mongoose    = require('mongoose');
var   point       = require('./PointSchema');

var TrackSchema = new mongoose.Schema({
      id: mongoose.Schema.Types.ObjectId,
      startPoint: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PointSchema"
      },
      endPoint: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PointSchema"
      },
      middlePoint: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "PointSchema"
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