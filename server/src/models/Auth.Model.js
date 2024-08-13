const {Schema,model} = require("mongoose");

const userSchema=new Schema({
username:{
    type:String,
    required:[true,"username is required"],
    unique:[true,"already exists in database"]
},
email:{
    type:String,
    required:[true,"username is required"],
    unique:[true,"already exists in database"]
},
password:{
    type:String,
    required:[true,"username is required"],
    min:[7,"password should must be at least 8 characters!!!"]
}
},{timestamps:true})

const User=new model('User',userSchema);  //make a table name "User" with format "userSchema"

module.exports={User};