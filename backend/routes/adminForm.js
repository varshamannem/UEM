const express = require("express");
const { get } = require("mongoose");
const Aform = require ("../models/Aform.js");
const router = express.Router();
router.post("/form",async(req,res)=>{
    try{const data=req.body;
    console.log(data);
    Aform.create(data);
    res.json({success:true});
    }catch{
        res.json({success:false});
    }
});

router.get("/form",async(req,res)=>{
    try{
        const getData=await Aform.find();
        console.log(getData);
        res.json([...getData]);

    }catch(err){
        res.json([]);
    }
});

router.get("/approved", async (req, res) => {
    try {
      const getData = await Aform.find({ approved: true });
      console.log(getData);
      res.json([...getData]);
    } catch (err) {
      res.json([]);
    }
  });
  router.get("/declined", async (req, res) => {
    try {
      const getData = await Aform.find({ approved: false });
      console.log(getData);
      res.json([...getData]);
    } catch (err) {
      res.json([]);
    }
  });


  module.exports=router;

