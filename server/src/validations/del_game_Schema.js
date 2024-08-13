const {z:zod}=require('zod');

const delete_game_Schema=zod.object({
    title_to_update:zod.string().min(1).max(25),
})

module.exports={delete_game_Schema};