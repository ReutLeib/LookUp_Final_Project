var mongoose  = require('mongoose');

var TrackSchema = new mongoose.Schema({
      id: mongoose.Schema.Types.ObjectId,
      // ID: {type: Number, index: true, required: true},
      startPoint: {type: mongoose.Schema.Types.ObjectId, ref: "Point2D", required: true},
      endPoint: {type: mongoose.Schema.Types.ObjectId, ref: "Point2D", required: true},
      middlePoint: [{type: mongoose.Schema.Types.ObjectId, ref: "Point2D"}],
      type: {type: String, required: true},
      title: {type: String, required: true},
      comment: [String],
      rating: {type: Number},
      changesDuringTrack: {type: Boolean},
      diffucultyLevel: {type: Number}
   }
);

var Track = mongoose.model("TrackSchema", TrackSchema, "Tracks");
module.exports = Track;