const {z:zod}=require('zod');

const title_to_update_Schema=zod.object({
    title:zod.string().min(1).max(25),
})

module.exports={title_to_update_Schema};