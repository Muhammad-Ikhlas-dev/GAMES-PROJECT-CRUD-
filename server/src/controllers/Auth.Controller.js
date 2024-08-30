const { User } = require("../models/Auth.Model")
const bcrypt=require("bcryptjs");
const jwt = require("jsonwebtoken");

async function signUp_req_handler(req,res){
    try{
        const {username,email,password}=req.body
        //Validation with clear message for ease of user
        let isUsernameDuplicate=await User.findOne({username}) //returns whole record having
        //duplicate username with username coming in request

        let isEmailDuplicate=await User.findOne({email})
        if(isUsernameDuplicate && isEmailDuplicate){
            return res.status(400).json({
                message:"username and email both already exists",
                success:false
            })
        }
        else if(isEmailDuplicate){
            return res.status(400).json({
                message:"email already exists",
                success:false
            })
        }
        else if(isUsernameDuplicate){
                return res.status(400).json({
                    message:"username already exits",
                    success:false
                })
        }

        //password encryption code
        let hashed_password=await bcrypt.hashSync(password,8);

        //entering record inside table "User"
        const user=new User({username,email,password:hashed_password}) //this pattern should be same with schema pattern 
        await user.save()
        //OR
        //const user=await User.create({username,email,password:hashed_password})

        console.log(user)
        // console.log(typeof(user.password))
        return res.status(200).json({
            message:"successfully sign up",
            success:true
            })
    }
    catch(error){
        return res.status(500).json({
        error,
        success:false    
        })
    }
}

async function login_req_handler(req,res){
const {body}=req;
const {email,password}=body
const user=await User.findOne({email})

if(!user){
return res.status(404).json({
    message:"invalid Email",
    success:false
})
}
if(!bcrypt.compareSync(password,user.password)){ //hash of that password found in db
    return res.status(404).json({
        message:"invalid password",
        success:false
    })
}

    const token=jwt.sign(
        {
          _id:user._id,
        },
        process.env.JWT_SECRET_KEY,
        {expiresIn:"15d"}
    );
    
    return res.status(200).json({
        message:"successfully logged",
        token,
        username:user.username,
        password:user.password,
        email:user.email,
        success:true
    })
}
module.exports={signUp_req_handler,login_req_handler};