const express = require('express');
const Buyer = require('../models/Buyer');
const router = express.Router();

router.get('/:buyerId', async(req,res)=>{

    try {

        const buyer = await Buyer.findById(req.params.buyerId);
        res.json(buyer.listofrequestedsellers); 
        
    } catch (err) {
        res.json({message:err})
    }

});
router.patch('/:buyerId', async(req,res)=>{

    try {

        const updatedBuyer = await Buyer.updateOne(
            { _id:req.params.buyerId },
            { $set : { listofrequestedsellers: req.body.listofrequestedsellers
                    } }
            
            );
        res.json(updatedBuyer); 
        
    } catch (err) {
        res.json({message:err})
    }

});

module.exports=router;