const path = require('path');

const express=require('express');

const rootDir = require('../util/path');

const router=express.Router();

router.get('/contactus',(req,res,next)=>{
   res.sendFile(path.join(rootDir, 'views', 'contactus.html')); 
})

router.post('/success',(req,res,next)=>{
    console.log("Form successfully submitted")
    res.send('<form action="/"><h1>Form successfully submitted!</h1> <button type="submit">RETURN TO HOME PAGE</button></form>')
})

module.exports=router;