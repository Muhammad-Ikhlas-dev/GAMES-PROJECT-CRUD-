//let's learn about zod
const {z: zod} = require('zod'); //extract z key and rename it 'zod'
let obj={
    username:"helloEveryone",
    password:"hello ",
    age:12
}


try{
let schema=zod.object({
    username:zod.string().min(6).max(118),
    password:zod.string().min(8,{message:"your password must be at least 8 characters"}).max(255),
    age:zod.number().min(18,{message:"age should must be greater than 18"})
})
//**************1 approach

/*const {
success,
error,
}=schema.safeParse(obj);
if(!success){
   console.log(error);
}*/

//********2 approach(EASY WAY) of using safeParse

const result=schema.safeParse(obj);
if(!result.success){
    console.log(result.error.issues)
}

//********3 approach of using safeParse

/*const {
    success,
    error:{errors}
}=schema.safeParse(obj);*/
}
catch(error){
    console.log("outside error",error)
}

//************************* For simple variable 
let str="hello everyone i am ikhlassadfsadfsdafaf"

const schema=zod.string().max(20)

const result=schema.safeParse(str)

if(!result.success){
    console.log(result.error.issues)
}


                                //PASSWORD ENCRYPT

const bcrypt=require("bcryptjs");

(async function a(){
let password="veryheavypassword";

let hashed_pass=bcrypt.hashSync(password,8);
console.log(hashed_pass)
})()


                                    // creating token test
const jwt= require("jsonwebtoken");
const { User } = require('./src/models/Auth.Model');
const token=jwt.login(
    {
      data:"foober"
    },
    "IKHLAS",
    {expiresIn:60*60}
);

//now verfying token assume on some request recieved from frontend

const decoded=jwt.verify(token,"IKHLAS");
console.log(decoded)
console.log(token)

//context will contain two states one for token is inside localStorage? and one for token is
//expired or not? then according to these states we will 