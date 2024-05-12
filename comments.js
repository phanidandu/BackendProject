const Sequelize=require('sequelize');

const sequelize= require('../util/database');

const comments=sequelize.define('comments', {
     id:{
       type:Sequelize.INTEGER,
       autoIncrement:true,
       allowNull:false,
       primaryKey:true
     },
     bid:Sequelize.INTEGER,
     comment:Sequelize.STRING,
  })

module.exports=comments;
