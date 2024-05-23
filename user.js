const express=require('express');

const expenseController = require('../controllers/expense');
const userController= require('../controllers/users');

const router=express.Router();

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.get('getUsers',userController.getUsers);

module.exports=router;