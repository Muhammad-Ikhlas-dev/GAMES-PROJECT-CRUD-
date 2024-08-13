const {z:zod}=require('zod')

const login_Schema=zod.object({
    password: zod.string().min(8).max(30),
    email: zod.string().min(12).max(30)
})

module.exports={login_Schema};