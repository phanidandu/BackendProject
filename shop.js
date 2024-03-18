const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //res.send('<h1>Hello from Shop Express!</h1>');
})

module.exports=router;