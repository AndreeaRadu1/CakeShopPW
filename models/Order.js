const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const OrderSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
       type: String,
       required: true
    },
     cakes: {
        type: String,
       required: true
    },
    cakeFlavour: {
        type: String,
       required: true
    },
    cakeModel: {
        type: String,
       required: true
    },
    kg: {
        type: String,
       required: true
    },
    message: {
       type: String,
       required: false
    },
    status: {
        type: String,
        required: false,
        default: "Order received"
     }
});

module.exports = Order = mongoose.model('Order', OrderSchema);