const {z:zod}=require('zod');

const title_to_update_Schema=zod.object({
    title_to_update:zod.string().min(1).max(25),
})

module.exports={title_to_update_Schema};