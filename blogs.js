const Blogs=require('../models/blog');
const Comments=require('../models/comments')

const addBlog=async (req,res,next)=>{
    try{ 
    const title=req.body.title;
    const author=req.body.author;
    const content=req.body.content;

    const data=await Blogs.create({title:title,author:author,content:content});
    res.status(201).json({blogDetails:data});
    }catch(err){
        res.status(500).json({error: err})
    }
}

const getBlogs=async (req,res,next)=>{
   try{
    const blogs=await Blogs.findAll();
    res.status(200).json({allBlogs:blogs}) 
   } catch(error){
    console.log("Get blogs is failing",JSON.stringify(error)); 
   }
}

const addComments=async (req,res,next)=>{
    try{
        if(req.params.id == 'undefined'){
         console.log('ID is missing');
         return res.status(400).json({err: 'ID is missing'})
        }    
    const bid=req.params.id;
    const comment=req.body.comment;

    const data=await Comments.create({bid:bid,comment:comment});
    res.status(201).json({commentDetails:data});
    }catch(err){
        res.status(500).json({error: err})
    }
}

const getComments=async (req,res,next)=>{
    try{
     const bid=req.params.id;  
     const comments=await Comments.findAll({ where: { bid: bid } });
     res.status(200).json({allComments:comments}) 
    } catch(error){
     console.log("Get comments is failing",JSON.stringify(error)); 
    }
 }

const deleteComment=async (req,res,next)=>{
    try{
        if(req.params.id == 'undefined'){
          console.log('ID is missing');
          return res.status(400).json({err: 'ID is missing'})
        }
 
      const uid=req.params.id;
      await Comments.destroy({where: {id:uid}});
      res.sendStatus(200);
     } catch(err){
      console.log(err);
      res.status(500).json(err); 
    }
}

/*
const getReturned=async (req,res,next)=>{
    try{
     const returnedBooks=await returnBook.findAll();
     res.status(200).json({allReturned:returnedBooks}) 
    } catch(error){
     console.log("Get returned books is failing",JSON.stringify(error)); 
    }
 }

const returnBooks=async (req,res,next)=>{   
    try{
    const name=req.body.name;
    const paidFine=req.body.paidFine;
    const actualReturn=req.body.actualReturn;

    const data=await returnBook.create({name:name,finePaid:paidFine,actualReturn:actualReturn});
    res.status(201).json({returnDetails:data});
    }catch(err){
        res.status(500).json({error: err})
    }
}
*/
module.exports = {
    addBlog,
    getBlogs,
    addComments,
    getComments,
    deleteComment
}