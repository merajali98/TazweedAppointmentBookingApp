const mongoose = require('mongoose');
const Seller = require('./Seller');
const ObjectId = require('mongodb').ObjectID;
const BuyerSchema = mongoose.Schema({
    id  : ObjectId,
    name : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    listofrequestedsellers:[{type : mongoose.Schema.ObjectId, ref : 'Seller'}],
    listofbookedsellers:[{type : mongoose.Schema.ObjectId, ref : 'Seller'}],
    listofrejectedsellers:[{type : mongoose.Schema.ObjectId, ref : 'Seller'}]
    
});

module.exports= mongoose.model('Buyers',BuyerSchema);