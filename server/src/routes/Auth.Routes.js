const {signUp_req_handler,login_req_handler} = require('../controllers/Auth.Controller.js');
const { signup_Schema } = require('../validations/signup_Schema.js');
const {login_Schema}=require('../validations/login_Schema.js');
const {validateSchema}=require('../middlewares/validation_mw.js');


const express=require('express');
const Router=express.Router();
//OR
//const Router = require('express').Router(')

Router.post('/signup',validateSchema(signup_Schema,null,null),signUp_req_handler);
Router.post('/login', validateSchema(login_Schema,null,null), login_req_handler);

module.exports=Router;  //remember: don't send it as an objec !!!, so that we can name
//it whatever we want while importing or requiring
