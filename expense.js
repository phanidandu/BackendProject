const express=require('express');

const expenseController = require('../controllers/expense');
const userController= require('../controllers/users');

const router=express.Router();

router.post('/expense/add-expense', expenseController.addExpense);

router.get('/expense/get-expenses/', expenseController.getExpenses);

router.delete('/expense/delete-expense/:id', expenseController.deleteExpense)

router.post('/user/signup', userController.addUser);

router.get('/getUsers',userController.getUsers)

module.exports=router;