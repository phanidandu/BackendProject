const User=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

function isstringinvalid(string){
    if(string==undefined || string.length===0){
       return true
    } else{
        return false
    }
}

const signup = async (req,res,next)=>{
    try{
    const {name,email,password}= req.body;
    
    if(isstringinvalid(name) || isstringinvalid(email) || isstringinvalid(password)){
        return res.status(400).json({err: "Bad parameters. Something is missing"})  
    }
    
    const userExists=await User.findOne({where: {name:name}})
     
    if(userExists)
    {
        return res.json("User name already exists");
    }    
    
    const saltrounds=10;

    bcrypt.hash(password, saltrounds, async(err,hash)=>{
        console.log(err);
        await User.create({name: name, email: email, password:hash});
        res.status(201).json({message: "Successfully created new User"});
    })
    }catch(err){
        res.status(500).json({
        error: err 
       })
     }
    }
    
    const generateAccessToken=(id,name,ispremiumuser)=>{
      return jwt.sign({userId:id,name:name,ispremiumuser:ispremiumuser},'secretkey')
    }

    const login = async (req,res,next)=>{
        try{
        const {email,password}= req.body;
        
        if(isstringinvalid(email) || isstringinvalid(password)){
            return res.status(400).json({message: "Bad parameters. Email Id or Password is missing", success: false})  
        }
    
        const userExists=await User.findOne({where: {email:email}})
        
        if(userExists)
        {   
            bcrypt.compare(password, userExists.password, (err,result)=>{
               if(err){
                throw  new Error('Something went wrong');
               }
               if(result===true)
                res.status(201).json({message: `User with email ${email} successfully logged in`,success: true, token:generateAccessToken(userExists.id,userExists.name,userExists.ispremiumuser)});
              else
                res.status(401).json({message: `Password entered is incorrect`,success: false});
            })
        } else{
              res.status(404).json({message:"User with given email does not exist",success: false});
        }           
        }catch(err){
            console.log(err);
            res.status(500).json({message: err,success: false})
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
        signup,
        getUsers,
        login
    }
    