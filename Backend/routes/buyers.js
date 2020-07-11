const express = require('express');
const Buyer = require('../models/Buyer');
const router = express.Router();
var cors = require('cors');
router.get('/',async(req,res)=>{

    try {
        const buyers=await Buyer.find();
        res.json(buyers);
        
    } catch (err) {
        res.json({message:err});
    }

});

router.post('/', async(req,res)=>{

    const buyer =new Buyer({
        name: req.body.name,
        address: req.body.address

    });
    try{
        const savedBuyer = await buyer.save();
        res.json(savedBuyer);

    }catch(err){
        res.json({message : err});
    }
    
    
});


router.get('/:buyerId',cors(), async(req,res)=>{

    try {

        const buyer = await Buyer.findById(req.params.buyerId);
        res.json(buyer); 
        
    } catch (err) {
        res.json({message:err})
    }

});

router.delete('/:buyerId', async(req,res)=>{

    try {

        const removedBuyer = await Buyer.remove({_id:req.params.buyerId});
        res.json(removedBuyer); 
        
    } catch (err) {
        res.json({message:err})
    }

});

module.exports=router;