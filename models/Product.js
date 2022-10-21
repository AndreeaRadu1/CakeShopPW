const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProductSchema = new Schema({
    category:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: false
    },
    image: {
       type: String,
       required: true
    },
     date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Product = mongoose.model('Products', ProductSchema);
