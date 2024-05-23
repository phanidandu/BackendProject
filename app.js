const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

var cors=require('cors');
app.use(cors());

const userRoutes=require('./routes/user');

app.use(bodyParser.json({ extended: false }));

app.use('/user',userRoutes);

sequelize
  .sync()
  .then(result => {
    app.listen(3000);      
  })
  .catch(err => {
    console.log(err);
  });
