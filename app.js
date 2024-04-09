const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

//const User=require('./models/User');
var cors=require('cors');

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const userRoutes=require('./routes/user');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(userRoutes);

sequelize
  .sync()
  .then(result => {
    app.listen(3000);      
  })
  .catch(err => {
    console.log(err);
  });



  
/*
const path = require('path');

const express= require('express');
const bodyParser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const contactRoutes=require('./routes/contactus')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes)
//app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);



const express= require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>') 
})

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000);
*/

/*
const express= require('express');
const bodyParser=require('body-parser');

const app=express();

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
   res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000);
*/

/*
app.post('/user/add-user', async (req,res,next)=>{
    console.log(req.body);
    try{
    if(!req.body.number){
      throw new Error('Phonenumber is mandatory');
    }
    const name= req.body.name;
    const email= req.body.emailid;
    const number= req.body.number;
    
    const data=await User.create({name: name, email: email, phonenumber:number});
    res.status(201).json({newUserDetail:data});
    }catch(err){
       res.status(500).json({
        error: err   
       })
    }
})

app.get('/user/get-users', async (req,res,next)=>{
 try{
   const users=await User.findAll();
   console.log(users);
   res.status(200).json({allUsers: users});
   }catch(error){
     console.log("Get user is failing",JSON.stringify(error));
   }
})
//app.use(errorController.get404);
//app.render('404', { pageTitle: 'Page Not Found', path: 'Error'});
app.delete('/user/delete-user/:id',async (req,res)=>{
  try{
    if(req.params.id == 'undefined'){
      console.log('ID is missing');
      return res.status(400).json({err: 'ID is missing'})
    }
  const uid=req.params.id;
  await User.destroy({where: {id:uid}});
  res.sendStatus(200);
}catch(err){
  console.log(err);
  res.status(500).json(err); 
}
})
*/