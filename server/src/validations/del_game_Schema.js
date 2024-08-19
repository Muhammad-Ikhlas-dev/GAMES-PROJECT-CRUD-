const {z:zod}=require('zod');

const delete_game_Schema=zod.object({
    title:zod.string().min(1).max(25),
})

module.exports={delete_game_Schema};