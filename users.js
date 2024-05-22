const User=require('../models/user');

const addUser = async (req,res,next)=>{
    try{
    const name= req.body.name;
    const email= req.body.email;
    const password= req.body.password;
     
    const data=await User.create({name: name, email: email, password:password});
    res.status(201).json({userDetails:data});
    }catch(err){
        console.log('User name or email already exists');
        res.status(500).json({
        error: err 
       })
     }
    }
    
    
 const getUsers= async (req,res,next)=>{
    try{
     const users=await User.findAll()
     console.log(users);
     res.status(200).json({allUsers: users});
     }catch(error){
       console.log("Get users is failing",JSON.stringify(error));
     }
  }

    module.exports = {
        addUser,
        getUsers
    }
    