const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const CategorySchema = new Schema({
    title:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
});

module.exports = Category = mongoose.model('Category', CategorySchema);
