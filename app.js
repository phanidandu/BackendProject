const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const dotenv=require('dotenv');

const sequelize = require('./util/database');
const Expense=require('./models/Expense');
const User=require('./models/user');
const Order=require('./models/orders');

const app = express();
dotenv.config();

var cors=require('cors');
app.use(cors());

const userRoutes=require('./routes/user');
const expenseRoutes=require('./routes/expense');
const purchaseRoutes=require('./routes/purchase');
const premiumRoutes=require('./routes/premium');

app.use(bodyParser.json({ extended: false }));

app.use('/user',userRoutes);
app.use('/expense',expenseRoutes);
app.use('/purchase',purchaseRoutes);
app.use('/premium',premiumRoutes)

User.hasMany(Expense);
Expense.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

sequelize
  .sync()
  .then(result => {
    app.listen(3000);      
  })
  .catch(err => {
    console.log(err);
  });
