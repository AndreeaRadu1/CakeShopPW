const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const GallerySchema = new Schema({
    image:{
        type: String,
        required: true
    },
     date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Gallery = mongoose.model('Gallery', GallerySchema);
