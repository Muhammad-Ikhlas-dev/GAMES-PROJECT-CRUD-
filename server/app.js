const express=require("express");
const Auth_Routers=require('./src/routes/Auth.Routes.js');
const Game_Routers=require('./src/routes/Game.Routes.js');
// const { AuthenticationCheck } = require("./src/middlewares/Auth.Middleware.js");
require("dotenv").config(); //to allow all other files to access .env file
const cors=require('cors')
const app=express();
app.use(express.json())
app.use(cors())

//routes imports
app.use(Auth_Routers)   //we are making a middleware ab jo bhi request ae gi is ke andar
//se guzar ke jae gi, if endpoint matched and if not then it will go to next Route
app.use(Game_Routers);

// app.use(AuthenticationCheck) //GLOBAL MIDDLEWARE

app.use((req,res)=>{
    return res.status(400).json({
        message:"resourse not found",
        success:false
    })
})

module.exports={app}

