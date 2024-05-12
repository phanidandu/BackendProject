const express=require('express');

const router=express.Router();

const blogsController=require('../controllers/blogs');

router.post('/blogs/addBlog',blogsController.addBlog);

router.get('/blogs/getBlogs',blogsController.getBlogs);

router.post('/blogs/:id/addComment',blogsController.addComments);

router.get('/blogs/:id/getComments',blogsController.getComments);

router.delete('/blogs/deleteComment/:id',blogsController.deleteComment);

module.exports=router;