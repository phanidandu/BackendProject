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
/*
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
