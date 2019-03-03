var mongoose  = require('mongoose');

var LatLangBoundsSchema = new mongoose.schema({
        id: mongoose.Schema.Types.ObjectId,
        // ID: {type: Number, index: true, required: true},
        Longtitude: {type: Number, required: true},
        Latitude: {type: Number, required: true}
    }
);

var LatLangBounds = mongoose.model("LatLangBoundsSchema", LatLangBoundsSchema, "LatLangBounds");
module.exports = LatLangBounds;