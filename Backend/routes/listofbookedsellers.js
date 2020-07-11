const express = require('express');
const Buyer = require('../models/Buyer');
const router = express.Router();
var cors = require('cors');
router.get('/:buyerId',cors(), async(req,res)=>{

    try {

        const buyer = await Buyer.findById(req.params.buyerId);
        res.json(buyer.listofbookedsellers); 
        
    } catch (err) {
        res.json({message:err})
    }

});
router.patch('/:buyerId',cors(), async(req,res)=>{

    try {

        const updatedBuyer = await Buyer.updateOne(
            { _id:req.params.buyerId },
            { $set : { listofbookedsellers: req.body.listofbookedsellers
                    } }
            
            );
        res.json(updatedBuyer); 
        
    } catch (err) {
        res.json({message:err})
    }

});

module.exports=router;