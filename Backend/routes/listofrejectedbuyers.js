const express = require('express');
const Seller = require('../models/Seller');
const router = express.Router();
var cors = require('cors');
router.get('/:sellerId',cors(), async(req,res)=>{

    try {

        const seller = await Seller.findById(req.params.sellerId);
        res.json(seller.listofrejectedbuyers); 
        
    } catch (err) {
        res.json({message:err})
    }

});
router.patch('/:sellerId', async(req,res)=>{

    try {

        const updatedSeller = await Seller.updateOne(
            { _id:req.params.sellerId },
            { $set : { listofrejectedbuyers: req.body.listofrejectedbuyers
                    } }
            
            );
        res.json(updatedSeller); 
        
    } catch (err) {
        res.json({message:err})
    }

});

module.exports=router;