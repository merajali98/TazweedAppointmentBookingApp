const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const SellerSchema = mongoose.Schema({
    id : ObjectId,
    name : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    availablefrom : {
        type: Date,
        required: true,
        default: Date.now
    },
    availableto : {
        type: Date,
        required: true,
        default: Date.now
    },
    listofrequestedbuyers:[{type : mongoose.Schema.ObjectId, ref : 'Buyer'}],
    listofbookedbuyers:[{type : mongoose.Schema.ObjectId, ref : 'Buyer'}],
    listofrejectedbuyers:[{type : mongoose.Schema.ObjectId, ref : 'Buyer'}]
});

module.exports= mongoose.model('Sellers',SellerSchema);