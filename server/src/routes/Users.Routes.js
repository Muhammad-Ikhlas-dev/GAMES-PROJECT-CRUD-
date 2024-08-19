const express=require('express');
const Router=express.Router();
const {users_get_req_handler}=require('../controllers/Users.Controller.js');

Router.get('/users',users_get_req_handler);

module.exports=Router;