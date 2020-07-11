const express = require('express');
const Seller = require('../models/Seller');
const router = express.Router();
var cors = require('cors');
router.get('/',cors(),async(req,res)=>{

    try {
        const sellers=await Seller.find();
        res.json(sellers);
        
    } catch (err) {
        res.json({message:err});
    }

});


router.post('/',cors(), async(req,res)=>{

    const seller =new Seller({
        name: req.body.name,
        address: req.body.address

    });
    try{
        const savedSeller = await seller.save();
        res.json(savedSeller);

    }catch(err){
        res.json({message : err});
    }
    
    
});


router.get('/:sellerId',cors(), async(req,res)=>{

    try {

        const seller = await Seller.findById(req.params.sellerId);
        res.json(seller); 
        
    } catch (err) {
        res.json({message:err})
    }

});
router.get('listofrequestedbuyers/:sellerId',cors(), async(req,res)=>{

    try {

        const seller = await Seller.findById(req.params.sellerId);
        res.json(seller.listofrequestedbuyers); 
        
    } catch (err) {
        res.json({message:err})
    }

});

router.delete('/:sellerId', async(req,res)=>{

    try {

        const removedSeller = await Seller.remove({_id:req.params.sellerId});
        res.json(removedSeller); 
        
    } catch (err) {
        res.json({message:err})
    }

});
router.post('/:sellerId',cors(), async(req,res)=>{

    try {

        const updatedSeller = await Seller.updateOne(
            { _id:req.params.sellerId },
            { $set : { availablefrom : req.body.availablefrom,
                       availableto : req.body.availableto
                    } }
            
            );
        res.json(updatedSeller); 
        
    } catch (err) {
        res.json({message:err})
    }

});

module.exports=router;