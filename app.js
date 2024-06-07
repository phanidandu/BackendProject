const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const sequelize = require('./util/database');
const Expense=require('./models/Expense');
const User=require('./models/user');

const app = express();

var cors=require('cors');
app.use(cors());

const userRoutes=require('./routes/user');
const expenseRoutes=require('./routes/expense');

app.use(bodyParser.json({ extended: false }));

app.use('/user',userRoutes);
app.use('/expense',expenseRoutes);

User.hasMany(Expense);
Expense.belongsTo(User);

sequelize
  .sync()
  .then(result => {
    app.listen(3000);      
  })
  .catch(err => {
    console.log(err);
  });
