const {User}=require('../models/Auth.Model.js');

async function users_get_req_handler(req,res){
try{
let usersRecord=await User.find({});
if(!usersRecord){
return res.status(400).json({
    message:"No Record found in the users",
    success:false
})
}
return res.status(200).json({
    message:"All users records fetched successfully",
    usersRecord,
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

module.exports={users_get_req_handler}