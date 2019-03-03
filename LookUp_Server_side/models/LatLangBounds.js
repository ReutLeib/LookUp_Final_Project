var mongoose = require('mongoose');

var LatLangBoundsSchema = new mongoose.schema({
    id: mongoose.Schema.Types.ObjectId,
    Longtitude: {
        type: Number,
        required: true
    },
    Latitude: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("LatLangBoundsSchema", LatLangBoundsSchema, "LatLangBounds");
