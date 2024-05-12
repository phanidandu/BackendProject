const express=require('express');
const bodyParser=require('body-parser');

const sequelize = require('./util/database');
const app=express();

const cors=require('cors');
app.use(cors());

const blogroute=require('./routes/blogs');

app.use(bodyParser.json({extended:false}));

app.use(blogroute);

sequelize.
sync({force:true})
.then(result=>{
  app.listen(3000);
})
.catch(err=>{
    console.log(err);
})
