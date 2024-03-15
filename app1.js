
const fs=require('fs');
const express= require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res,next)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err);
            data='No chat Exists'
        }
        res.send(
            `${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
            <input id="message" name="message" type="text" placeholder="message">
            <input id="username" type="hidden" name="username">
            <br />
            <button type="submit">add</button>
            </form>`
            )
    })
})

app.post('/',(req,res,next)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("username.txt",`${req.body.username}: ${req.body.message}`, {flag:'a'}, (err)=>
        err ?  console.log(err) : res.redirect('/')
    )    
})

app.post('/login',(req,res,next)=>{
    res.redirect('/');
})

app.get("/login", (req,res) =>{
    res.send(
        `<form action="/login" method="POST" onSubmit="localStorage.setItem('username',document.getElementById('username').value)">
         <input id="username" name="username" type="text" placeholder="username">
         <button type="submit">add</button>
         </form>`
    )
})

app.listen(3000);

