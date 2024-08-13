const {z:zod}=require('zod')

const signup_Schema=zod.object({
    username: zod.string().min(4,{message:"username is too short!!!"}).max(30),
    password: zod.string().min(8).max(30),
    email: zod.string().min(12).max(30)
})

module.exports={signup_Schema};