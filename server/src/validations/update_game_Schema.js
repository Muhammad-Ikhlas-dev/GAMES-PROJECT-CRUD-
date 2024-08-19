const {z:zod}=require('zod');

const update_game_Schema=zod.object({
    updated_title:zod.string().max(25),
    updated_genre:zod.string().max(20),
    updated_description:zod.string().max(200)
})

module.exports={update_game_Schema}