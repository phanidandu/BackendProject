const User=require('../models/user');

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

    await User.create({name: name, email: email, password:password});
     res.status(201).json({message: "Successfully created new User"});
    }catch(err){
        res.status(500).json({
        error: err 
       })
     }
    }
    
 
    const login = async (req,res,next)=>{
        try{
        const {email,password}= req.body;
        
        if(isstringinvalid(email) || isstringinvalid(password)){
            return res.status(400).json({err: "Bad parameters. Something is missing"})  
        }
    
        const userExists=await User.findOne({where: {email:email}})
        
        if(userExists)
        {
            if(password.localeCompare(userExists.password)===0)
              res.status(201).json({message: `User with ${email} successfully logged in`,Success: 'true'});
            else
              res.status(400).json({message: `Password entered is incorrect`});
        } else{
              res.status(400).json("User with given email does not exist");
        }           
        }catch(err){
            console.log(err);
            res.status(500).json({
            message: err
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
        signup,
        getUsers,
        login
    }
    